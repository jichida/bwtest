import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtAvatar, Picker, AtButton, AtIcon} from 'taro-ui'
import { connect } from '@tarojs/redux'
import lodashmap from 'lodash.map'
import moment from 'moment'

import 'taro-ui/dist/components/flex/index.scss';
import 'taro-ui/dist/components/flex/item/index.scss';
import './index.less'

import initTimes from './times'

const orderProps = [{
  date:'2019-01-24',
  time: '14:00-14:30',
  category:'健身',
  price:60
},
{
  date:'2019-01-24',
  time: '16:00-16:30',
  category:'健身',
  price:60
}
]

const category = '健身';

class Index extends Taro.Component {

  config = {
    navigationBarBackgroundColor: '#f39800',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '伴我共享 - 健身'
  }

  constructor(props) {
    super(props)

    lodashmap(orderProps, (item) => {
      console.log(item.category)
      if(item.category === category){
        console.log(item.date)
        console.log(this.state.order[item.date])
        if(!this.state.order[item.date]){
          this.state.order[item.date] = {...initTimes};
        }
        this.state.order[item.date][item.time] = true;
        this.state.count = this.state.count + 1;
        console.log(this.state.order[item.date][item.time])
      }
    })

    this.state.dur = {
      hours: parseInt(this.state.count/2),
      mins: this.state.count%2*30
    }
  }

  state = {
    dateSel: moment().format('YYYY-MM-DD'),
    order:{
      [`${moment().format('YYYY-MM-DD')}`] : {...initTimes}
    },
    count: 0,
    dur: {
      hours: 0, //parseInt(count/2)
      mins: 0 //count%2*30
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillMount() {
    // getServerData
  }
  componentWillUnmount() {
  }

  componentDidShow() { }

  componentDidHide() { }

  onShareAppMessage() {}

  onReachBottom() {
    // // 触发到底部
    // this.setState({
    //   page: this.state.page + 1
    // })
    // const { page, per_page } = this.state
    // let params = {
    //   page: this.state.page + 1, per_page: per_page
    // }
    // counterAction.list(params)
  }

  onDateChange = e => {
    const nextDate = moment(e.detail.value);
    console.log(nextDate.format('YYYY-MM-DD'))
    console.log(nextDate.isBefore(moment().format('YYYY-MM-DD')))
    if(!nextDate.isBefore(moment().format('YYYY-MM-DD'))){
      if(!this.state.order[nextDate.format('YYYY-MM-DD')]){
        const order = this.state.order
        order[nextDate.format('YYYY-MM-DD')] = {...initTimes}
        this.setState({
          dateSel: nextDate.format('YYYY-MM-DD'),
          order
        })
      }
      else{
        this.setState({
          dateSel: nextDate.format('YYYY-MM-DD')
        })
      }
    }
  }

  handlePickTime = (v, e) =>{
    const order = this.state.order;
    let count = order[this.state.dateSel][v] ? (this.state.count - 1) : (this.state.count + 1);
    let dur = { 
      hours: parseInt(count/2),
      mins: count%2*30
    }
    order[this.state.dateSel][v] = !order[this.state.dateSel][v];
    this.setState({
      order,
      count,
      dur
    })
  }

  handleLeftChange = () => {
    const curDate = moment(this.state.dateSel)
    const nextDate = curDate.subtract(1, 'days');
    console.log(nextDate.format('YYYY-MM-DD'))
    console.log(nextDate.isBefore(moment().format('YYYY-MM-DD')))
    if(!nextDate.isBefore(moment().format('YYYY-MM-DD'))){
      if(!this.state.order[nextDate.format('YYYY-MM-DD')]){
        const order = {...this.state.order}
        order[nextDate.format('YYYY-MM-DD')] = {...initTimes}
        this.setState({
          dateSel: nextDate.format('YYYY-MM-DD'),
          order
        })
      }
      else{
        this.setState({
          dateSel: nextDate.format('YYYY-MM-DD')
        })
      }
    }
  }

  handleRightChange = () => {
    const curDate = moment(this.state.dateSel)
    const nextDate = curDate.add(1, 'days');
    console.log('Right Change:')
    console.log(nextDate.format('YYYY-MM-DD'))
    console.log(this.state.order[nextDate.format('YYYY-MM-DD')])
    if(!this.state.order[nextDate.format('YYYY-MM-DD')]){
      const order = {...this.state.order}
      order[nextDate.format('YYYY-MM-DD')] = {...initTimes}
      this.setState({
        dateSel: nextDate.format('YYYY-MM-DD'),
        order
      })
    }
    else {
      this.setState({
        dateSel: nextDate.format('YYYY-MM-DD'),
      })
    }
  }

  handleSubmit = () => {
    const values = []
    lodashmap(this.state.order, (times, day)=>{
      lodashmap(times, (v, k)=>{
        if(v){
          values.push({
            date: day,
            time: k,
            category,
            price: 20
          })
        }
      })
    })
    console.log(values)
    // 提交预约
    

  }

  render() {
    const timesList = Object.entries(this.state.order[this.state.dateSel]).map((item)=>{
        return (
        <View key={item[0]} className='at-col at-col-4 times center marginTB10' onClick={this.handlePickTime.bind(this, item[0])}>{item[0]}{item[1]&&<AtIcon value='check' size='8' color='#33CC33' />}</View>
        )
    })
    return (
      <View className='container'>
        <View className='top'>
            <View className='title'><Text>健身</Text></View>
            <View className='desc'><Text>收费标准： 20元/半小时</Text></View>
            <View className='desc'><Text>营业时间： 8：00 - 22：00</Text></View>
        </View>
        <View className='center datesel'>
            <AtIcon value='chevron-left' size='12' color='#000' onClick={this.handleLeftChange} />
            <Picker mode='date' onChange={this.onDateChange} className="picker">
                <View className='picker'>
                    {this.state.dateSel}
                </View>
            </Picker>
            <AtIcon value='chevron-right' size='12' color='#000' onClick={this.handleRightChange} />
        </View>
        <View className='at-row at-row--wrap'>
            {timesList}
        </View>
        <View className='total marginTB20'><Text>共{this.state.dur.hours}小时{this.state.dur.mins}分钟，合计：{this.state.count*20}元</Text></View>
        <View className='center marginTB20'><AtButton size='small' className='submit' onClick={this.handleSubmit} >预约付款</AtButton></View>
      </View>
    )
  }
}

export default Index


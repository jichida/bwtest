import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtDivider, AtList, AtListItem} from 'taro-ui'
import { connect } from '@tarojs/redux'

import './index.less'

const order = [{
  date:'2018/08/29',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
{
  date:'2018/08/30',
  time: '14:00-15:30',
  category:'健身',
  price:60
}
]

const spended = [{
  date:'2018/08/1',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
{
  date:'2018/08/2',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
{
  date:'2018/08/3',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
{
  date:'2018/08/4',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
{
  date:'2018/08/5',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
{
  date:'2018/08/6',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
{
  date:'2018/08/7',
  time: '14:00-15:30',
  category:'健身',
  price:60
},
]

class Index extends Taro.Component {

  config = {
    navigationBarBackgroundColor: '#f39800',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: ''
  }

  constructor(props) {
    super(props)
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


  render() {
    const orderList = order.map((item)=>{
        return (
          <View className='list-item' key={`${item.category}${item.date}${item.time}`}>
                <Text>{item.date}</Text>
                <Text style={{flex: 1}}>{item.time}</Text>
                <Text>{item.category}</Text>
                <Text style={{paddingRight: '5px'}}>{`预约: ${item.price}元`}</Text>
          </View>
        )
    })

    const spendedList = spended.map((item)=>{
        return (
            //<AtListItem key={item} className='list-item' title={item} />
            <View className='list-item' key={`${item.category}${item.date}${item.time}`}>
                <Text>{item.date}</Text>
                <Text style={{flex: 1}}>{item.time}</Text>
                <Text>{item.category}</Text>
                <Text style={{paddingRight: '5px'}}>{`预约: ${item.price}元`}</Text>
          </View>
        )
    })

    return (
      <View className='container'>
        <View className='top'>
            <View className='title'><Text>3999.00</Text></View>
            <View className='desc'><Text>账户余额</Text></View>
            <View className='divider' />
            <View className='btn'><Text>充值</Text></View>
        </View>
        <View className='datesel'>
            <View className='item-title'><Text>已预约</Text></View>
        </View>
        {/* <AtList className='list'>
            {orderList}
        </AtList> */}
        <View className='list'>
          {orderList}
        </View>
        <View className='datesel'>
            <View className='item-title'><Text>已消费</Text></View>
        </View>
        {/* <AtList>
            {spendedList}
        </AtList> */}
        <View className='list'>
          {spendedList}
        </View>

      </View>
    )
  }
}

export default Index
// const mapStateToProps = (state, ownProps) => {
//   return {
//     getList: state.counter.list
//   }
// }
// export default connect(mapStateToProps)(Index)

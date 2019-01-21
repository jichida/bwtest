import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtDivider, AtList, AtListItem} from 'taro-ui'
import { connect } from '@tarojs/redux'

import './index.less'

const order = [
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  18:00-19:30  健身  预约: 60元',
]

const spended = [
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
    '2018/08/29  14:00-15:30  健身  预约: 60元',
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

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render() {
    const orderList = order.map((item)=>{
        return (
            <AtListItem key={item} className='list-item' title={item} />
        )
    })

    const spendedList = spended.map((item)=>{
        return (
            <AtListItem key={item} className='list-item' title={item} />
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
        <AtList className='list'>
            {orderList}
        </AtList>
        <View className='datesel'>
            <View className='item-title'><Text>已消费</Text></View>
        </View>
        <AtList>
            {spendedList}
        </AtList>
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

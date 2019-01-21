import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtAvatar} from 'taro-ui'
import { connect } from '@tarojs/redux'
import getUserInfo from '../../actions/userinfo'


import './index.less'

class Index extends Taro.Component {

  config = {
    navigationBarBackgroundColor: '#f39800',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '伴我共享'
  }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillMount() {
     // this.props.getList(this.state)
     getUserInfo.asyncGetInfo()
  }
  componentWillUnmount() {
  }

  componentDidShow() { }

  componentDidHide() { }

  onShareAppMessage() {
    return {
      title: '伴我共享',
      path: '/pages/index/index',
      imageUrl: '../../common/image/share.png'
    }
  }

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

  handleGoHealth = () => {
    console.log('go to health!')
    Taro.redirectTo({
        url: '/pages/health/index'
      })
  }

  handleGoCurrent = () => {
    console.log('go to current user')
    Taro.redirectTo({
      url: '/pages/current/index'
    })
  }

  render() {
    const { userInfo } = this.props;
    return (
      <View className='index-container'>
        <View className='item'>
            <View>
                <View className='title'>K歌</View>
                <View className='price'>收费标准：20元/半小时</View>
            </View>
        </View>
        <View className='item' onClick={this.handleGoHealth}>
            <View>
                <View className='title'>健身</View>
                <View className='price'>收费标准：20元/半小时</View>
            </View>
        </View>
        <View className='item'>
            <View>
                <View className='title'>棋牌</View>
                <View className='price'>收费标准：20元/半小时</View>
            </View>
        </View>
        <View className='customer' onClick={this.handleGoCurrent}>
            <View className='avatar'><AtAvatar circle image='https://jdc.jd.com/img/200' /></View>
            <View className='info'>
                <Text className="detail">你好， {userInfo.name}！</Text>
                <Text className="detail">账号余额： {userInfo.balance}元</Text>
                <Text className="detail">当前你有两个预约！</Text>
            </View>
        </View>
      </View>
    )
  }
}

// export default Index
const mapStateToProps = ({userInfo}) => {
  return {
    userInfo
  }
}
export default connect(mapStateToProps)(Index)

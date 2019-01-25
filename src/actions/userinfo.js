import { bindActionCreators } from 'redux'
import Taro from '@tarojs/taro'
import {
  INFO, LOGIN
} from '../constants/userinfo'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'

// 请求api
export const userLogin = createApiAction(LOGIN, params => api.get('/login', params))
export const getInfo = createApiAction(INFO,params => api.get('/user', params))

export default bindActionCreators({
  userLogin,
  getInfo
}, store.dispatch)

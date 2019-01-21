import { bindActionCreators } from 'redux'
import Taro from '@tarojs/taro'
import {
  INFO
} from '../constants/userinfo'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'

export function asyncGetInfo() {
    return dispatch => {
        setTimeout(() => {
          dispatch(getInfo())
        }, 0)
      }
}

// 请求api
export const getInfo = createApiAction(INFO,params => api.get('/user', params))

export default bindActionCreators({
  asyncGetInfo
}, store.dispatch)

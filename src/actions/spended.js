import { bindActionCreators } from 'redux'
import Taro from '@tarojs/taro'
import {
  ADD,
  LIST
} from '../constants/spended'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'


export const add = createApiAction(ADD, params => {
    console.log('add', params);

})

export const list = createApiAction(LIST, params => {
    console.log('list',params);
    return api.get('/spended/list', params)
})
  
export default bindActionCreators({
    list,
    add
}, store.dispatch)
  
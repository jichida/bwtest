import { combineReducers } from 'redux'
import userInfo from './userinfo'
import order from './order'
import spended from './spended'

export default combineReducers({
  userInfo,
  order,
  spended
})

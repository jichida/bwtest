import { INFO } from '../constants/userinfo'

const INITIAL_STATE = {
  id: 0,
  name: '',
  balance: 0,
  order: [],
  depended: []
}

export default function userInfo (state = INITIAL_STATE, action) {
  console.log('action', action)
  switch (action.type) {
    case INFO:
      return {
        ...state,
        ...action.payload.data.data.user // 根据返回的数据选择路径
      }
     default:
       return state
  }
}

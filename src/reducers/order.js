import { ADD, LIST } from '../constants/order'

const INITIAL_STATE = {
  order: []
}

export default function userInfo (state = INITIAL_STATE, action) {
  console.log('action', action)
  switch (action.type) {
    case ADD:
      return {
        ...state,
        // ...action.payload.data.data.user 
      }
     default:
       return state
  }
}

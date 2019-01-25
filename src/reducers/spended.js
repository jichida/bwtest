import { ADD, LIST } from '../constants/spended'

const INITIAL_STATE = {
  spended: []
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

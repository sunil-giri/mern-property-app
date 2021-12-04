import { USER } from "../types"

let initialState={}

const userReducer = (state=initialState,{type,payload}) =>{
  switch(type){
    case USER:return payload
    default:
      return state
  }
}

export default userReducer
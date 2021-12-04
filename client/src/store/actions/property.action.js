import { ADD_PROPERTY } from "../types"

export const addProperty = (data) =>{
  return {
    type:ADD_PROPERTY,
    payload:data
  }
}


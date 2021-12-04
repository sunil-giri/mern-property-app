import { ADD_PROPERTY } from "../types"

let initialState=[]



export const propertyReducer =(state=initialState,{type,payload})=>{
  switch(type){
    case ADD_PROPERTY:return [...payload]

    default :return initialState
  }
}
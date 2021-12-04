let initialState={}

const userReducer = (state=initialState,{type,payload}) =>{
  switch(type){
    case 'USER':return state
    default:
      return state
  }
}

export default userReducer
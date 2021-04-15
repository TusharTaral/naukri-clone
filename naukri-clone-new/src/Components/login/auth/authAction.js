import { ADD_LOGIN_FAILURE, ADD_LOGIN_REQUEST, ADD_LOGIN_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./authActionType"

export const loginSuccess =()=>{
  return{
      type:LOGIN_SUCCESS
  }
}

export const logoutSuccess =()=>{
    return{
        type:LOGOUT_SUCCESS
    }
  }

export const addLoginRequest =()=>{
    return{
        type:ADD_LOGIN_REQUEST,
    }
}
export const addLoginSuccess =(payload)=>{
    return{
        type:ADD_LOGIN_SUCCESS,
        payload
    }
}

export const addLoginFailure =()=>{
    return{
        type:ADD_LOGIN_FAILURE,       
    }
}

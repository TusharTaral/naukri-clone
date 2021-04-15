import {loadData, saveData} from "./localStorage"
import { ADD_LOGIN_FAILURE, ADD_LOGIN_REQUEST, ADD_LOGIN_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./authActionType";

let isAuth = loadData("token")||false;
//let isToken = loadData("token")||false;

const instate ={
  isAuth:isAuth,
  token:"",
  email:"" ,
  isLoading:true,
  isError:false
}

const authReducer= (state=instate,{type,payload})=>{

    switch(type){ 
      case LOGOUT_SUCCESS:{
          saveData("token",false);
          return{
              ...state,
              isAuth:false
          }
      }
      case LOGIN_SUCCESS:{
        saveData("token",true);
        return{
            ...state,
            isAuth:true
        }
    }
      case ADD_LOGIN_REQUEST:{
         return{
             ...state,
         }
      }
      case ADD_LOGIN_SUCCESS:{
          saveData("token",payload)
        return{
            ...state,
            isLoading:false,
            isError:false
        }
     }
     case ADD_LOGIN_FAILURE:{
        return{
            ...state,
            isError:true
        }
     }
        default:
            return state;

        }
       
}

export {authReducer}
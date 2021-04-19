import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,GET_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE} from "./actionType";
//import {v4 as uuid} from "uuid"
import axios from "axios"

// export const addTodo =(payload)=> {
//     return{
//         type:ADD_TODO,
//         payload
//     } 
// }

export const deleteTodo =(payload)=> {
    return{
        type:DELETE_TODO,
        payload
    }
}

export const toggleTodo =(payload)=> {
    return{
        type:TOGGLE_TODO,
        payload
    } 
}

export const getTodoRequest =()=>{
  return{
      type:GET_TODO_REQUEST
  }
}

export const getTodoSuccess =(payload)=>{
    return{
        type:GET_TODO_SUCCESS,
        payload
    }
  }
  
  
  export const getTodoFailure =()=>{
    return{
        type:GET_TODO_FAILURE
    }
  }
  
  export const addTodoRequest =()=>{
    return{
        type:ADD_TODO_REQUEST
    }
  }
  
  export const addTodoSuccess =()=>{
      return{
          type:ADD_TODO_SUCCESS,
      }
    }
    
    
    export const addTodoFailure =()=>{
      return{
          type:ADD_TODO_FAILURE
      }
    }
    
export const addTodo =(payload)=>(dispatch,getState)=>{

        //start of request 
        const requestAction = addTodoRequest()
        dispatch(requestAction)
        return axios.post("https://json-server-mocker-masai.herokuapp.com/tasks",{
            title:payload.title,
            status:payload.status
        })
        .then(res=>{
            const successAction = addTodoSuccess(res.data)
            dispatch(successAction)
        }).catch(err=>{
            const errorAction =addTodoFailure(err)
            dispatch(errorAction)
        })
    }

    export const getTodo =(params)=>(dispatch,getState)=>{

        //start of request 
        const requestAction = getTodoRequest()
        dispatch(requestAction)
        return axios.get("https://json-server-mocker-masai.herokuapp.com/tasks")
        .then(res=>{
            const successAction = getTodoSuccess(res.data)
            console.log(res.data)
            dispatch(successAction)
        }).catch(err=>{
            const errorAction =getTodoFailure(err)
            dispatch(errorAction)
        })
    }
    
  


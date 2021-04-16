import { GET_JOB_FAILURE_BY_ID, GET_JOB_REQUEST_BY_ID, GET_JOB_SUCCESS_BY_ID } from "./actionType"


const inState ={
    isLoading: false,
    isError: false,
    jobs:"",
}

export const reducerJobDes = (state=inState,{type,payload})=>{
    switch(type){
        case GET_JOB_REQUEST_BY_ID:{
            return{
                ...state,
                isLoading:true
            }
        }
        case GET_JOB_SUCCESS_BY_ID:{
            return{
                ...state,
                isLoading:false,
                jobs:payload,
            }
        }
        case GET_JOB_FAILURE_BY_ID:{
            return{
                ...state,
                isError:true,
                payload
            }
        }
        default:{
            return state;
        }
    }
}
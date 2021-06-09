import { GET_JOB_FAILURE_BY_ID, GET_JOB_FAILURE_BY_JOB, GET_JOB_FAILURE_BY_JOB_5, GET_JOB_REQUEST_BY_ID, GET_JOB_REQUEST_BY_JOB, GET_JOB_REQUEST_BY_JOB_5, GET_JOB_SUCCESS_BY_ID, GET_JOB_SUCCESS_BY_JOB, GET_JOB_SUCCESS_BY_JOB_5 } from "./actionType"


const inState ={
    isLoading1: false,
    isLoading2: false,
    isLoading3: false,
    isError: false,
    jobs:"",
    jobSug:[],
    jobSug5:[],
}

export const reducerJobDes = (state=inState,{type,payload})=>{ 

    switch(type){
        case GET_JOB_REQUEST_BY_ID:{
            return{
                ...state,
                isLoading1:true
            }
        }
        case GET_JOB_SUCCESS_BY_ID:{
            return{
                ...state,
                isLoading1:false,
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
        case GET_JOB_REQUEST_BY_JOB:{
            return{
                ...state,
                isLoading2:true
            }
        }
        case GET_JOB_SUCCESS_BY_JOB:{
            return{
                ...state,
                isLoading2:false,
                jobSug:payload,
            }
        }
        case GET_JOB_FAILURE_BY_JOB:{
            return{
                ...state,
                isError:true,
                payload
            }
        }
        case GET_JOB_REQUEST_BY_JOB_5:{
            return{
                ...state,
                isLoading3:true
            }
        }
        case GET_JOB_SUCCESS_BY_JOB_5:{
            return{
                ...state,
                isLoading3:false,
                jobSug5:payload,
            }
        }
        case GET_JOB_FAILURE_BY_JOB_5:{
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
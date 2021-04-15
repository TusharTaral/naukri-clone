import {GET_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_FAILURE} from "./actionType";
import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE} from "./actionType";


const instate ={
   todo:
         {
       data:[],
       isLoading:false,
       isError:false,
    },
  
}

const reducer= (state=instate,{type,payload})=>{

    switch(type){ 
       
        case GET_TODO_REQUEST:{
            return{
                ...state,
                todo:{
                    ...state.todo,
                isLoading:true,
                isError:false
                }
            }
        }
        case GET_TODO_SUCCESS:{
            return{
                ...state,
                todo:
                { ...state.todo,
                    isLoading:false,
                    data: payload,
                   }

            }
        }
        case GET_TODO_FAILURE:{
            return{
                ...state,
                todo:{
                    ...state.todo,
                isLoading:false,
                isError:true
                }
            }
        }
        case ADD_TODO_REQUEST:{
            return{
                ...state,
                todo:{
                    ...state.todo,
                isLoading:true,
                isError:false
                }
            }
        }
        case ADD_TODO_SUCCESS:{
            return{
                ...state,
                todo:
                { ...state.todo,
                    isLoading:false,                    
                   }

            }
        }
        case ADD_TODO_FAILURE:{
            return{
                ...state,
                todo:{
                    ...state.todo,
                isLoading:false,
                isError:true
                }
            }
        }
        default:
            return state;

        }
       
}

export {reducer}
import {createStore} from "redux"
import { reducer } from "./reducer"
import {applyMiddleware,compose,combineReducers} from "redux"
import {authReducer} from "../auth/authReducer"

const rootReducer = combineReducers({
    auth:authReducer,
    app:reducer
})
const middlewareLogger = (store)=>(next)=>(action)=>{
    // console.log(action)
    // console.log(store.getState());
    const val = next(action)
    return val;
}
// const middlewareLogger2 = (store)=>(next)=>(action)=>{
//     console.log(action)
//     console.log(store.getState());
//     const val = next(action)
//     return val;
// }


const middlewareFunctionHandler = store =>next =>action=>{
         if (typeof action === "function"){
             return action (store.dispatch, store.getState)
         }
         return next (action)
}



const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    rootReducer, 
    createComposer(
        applyMiddleware(
            // middlewareLogger,
            // middlewareLogger2
             middlewareFunctionHandler
        )
    )
)

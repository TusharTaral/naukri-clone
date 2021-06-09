import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducerJobDes } from '../JobDescriptionRedux/reducerJobDes';
import { jobReducer } from './jobReducer';
import {recruiterReducer} from "../RecruiterRedux/reducer"


const rootReducer = combineReducers({
    job: jobReducer,
    jobId:reducerJobDes,
    recruiter:recruiterReducer
})

const customMiddleWare = (state) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action)
}

export const store = createStore(rootReducer, compose(applyMiddleware(customMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
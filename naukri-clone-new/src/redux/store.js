import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducerJobDes } from '../JobDescription/reducerJobDes';
import { jobReducer } from './jobReducer';



const rootReducer = combineReducers({
    job: jobReducer,
    jobId:reducerJobDes
})

const customMiddleWare = (state) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action)
}

export const store = createStore(rootReducer, compose(applyMiddleware(customMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
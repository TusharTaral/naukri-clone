import { GET_JOB_FAILURE, GET_JOB_REQUEST, GET_JOB_SUCCESS } from "./actionTypes"

const initState = {
    jobs: [],
    isLoading: false,
    isError: false,
    isSearch: false
}

export const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_JOB_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case GET_JOB_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                jobs: action.payload,
                isSearch: true
            }
        }

        case GET_JOB_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }

        default: return state
    }
}
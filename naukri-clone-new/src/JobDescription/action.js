import axios from 'axios'
import { GET_JOB_FAILURE_BY_ID, GET_JOB_REQUEST_BY_ID, GET_JOB_SUCCESS_BY_ID } from "./actionType"

export const getJobRequestById = () => {
    return {
        type: GET_JOB_REQUEST_BY_ID
    }
}

export const getJobSuccessById = (payload) => {
    return {
        type: GET_JOB_SUCCESS_BY_ID,
        payload
    }
}

export const getJobFailureById = (payload) => {
    return {
        type: GET_JOB_FAILURE_BY_ID,
        payload
    }
}


export const getJobById = (id) => (dispatch) => {
    dispatch(getJobRequestById());
    return axios.get(`https://json-server-vedanshw.herokuapp.com/naukri/${id}`
    )
        .then(res => dispatch(getJobSuccessById(res.data)))
        .catch(err => dispatch(getJobFailureById(err)))

}

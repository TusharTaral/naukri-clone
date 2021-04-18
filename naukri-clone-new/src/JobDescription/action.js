import axios from 'axios'
import { GET_JOB_FAILURE_BY_ID, GET_JOB_FAILURE_BY_JOB, GET_JOB_FAILURE_BY_JOB_5, GET_JOB_REQUEST_BY_ID, GET_JOB_REQUEST_BY_JOB, GET_JOB_REQUEST_BY_JOB_5, GET_JOB_SUCCESS_BY_ID, GET_JOB_SUCCESS_BY_JOB, GET_JOB_SUCCESS_BY_JOB_5 } from "./actionType"
import { saveData } from './localStorage'

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

export const getJobRequestByJob = () => {
    return {
        type: GET_JOB_REQUEST_BY_JOB
    }
}

export const getJobSuccessByJob = (payload) => {
    return {
        type: GET_JOB_SUCCESS_BY_JOB,
        payload
    }
}

export const getJobFailureByJob = (payload) => {
    return {
        type: GET_JOB_FAILURE_BY_JOB,
        payload
    }
}
export const getJobRequestByJob5 = () => {
    return {
        type: GET_JOB_REQUEST_BY_JOB_5
    }
}

export const getJobSuccessByJob5 = (payload) => {
    return {
        type: GET_JOB_SUCCESS_BY_JOB_5,
        payload
    }
}

export const getJobFailureByJob5 = (payload) => {
    return {
        type: GET_JOB_FAILURE_BY_JOB_5,
        payload
    }
}

export const getJobById = (id,job) => (dispatch) => {
    dispatch(getJobRequestById());
    saveData("jobForDes",job)
    return axios.get(`https://json-server-vedanshw.herokuapp.com/naukri/${id}`
    )
        .then(res => dispatch(getJobSuccessById(res.data)))
        .catch(err => dispatch(getJobFailureById(err)))

}

export const getJobByJob = (job) => (dispatch) => {
    dispatch(getJobRequestByJob());
    return axios.get(`https://json-server-vedanshw.herokuapp.com/naukri/`,{
        params:{
            q:job,
            _page:1,
            _limit:3,
            _sort:'date'
        }
    }
    )
        .then(res => dispatch(getJobSuccessByJob(res.data)))
        .catch(err => dispatch(getJobFailureByJob(err)))

}


export const getJobBySimilarJob = (job) => (dispatch) => {
    dispatch(getJobRequestByJob5());
    return axios.get(`https://json-server-vedanshw.herokuapp.com/naukri/`,{
        params:{
            q:job,
            _page:1,
            _limit:5,
        }
    }
    )
        .then(res => dispatch(getJobSuccessByJob5(res.data)))
        .catch(err => dispatch(getJobFailureByJob5(err)))

}

import { GET_JOB_FAILURE, GET_JOB_REQUEST, GET_JOB_SUCCESS } from "./actionTypes"
import axios from 'axios'

export const getJobRequest = () => {
    return {
        type: GET_JOB_REQUEST
    }
}

export const getJobSuccess = (payload) => {
    return {
        type: GET_JOB_SUCCESS,
        payload
    }
}

export const getJobFailure = () => {
    return {
        type: GET_JOB_FAILURE
    }
}

//for searching on homepage
export const getJobs = (job, location) => (dispatch) => {
    dispatch(getJobRequest());

    if (job !== '' && location !== '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                location: location
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
    else if (job !== '' && location === '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
}

//sort by location
export const getJobsByLocation = (job, loc1) => (dispatch) => {
    if (loc1 !== '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                location: loc1
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    } else {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
}
//sort by rating
export const getJobsByRating = (job, num, location) => (dispatch) => {
    if (num === 0) { var gte = 0; var lte = 1 }
    else if (num === 1) { var gte = 1; var lte = 2 }
    else if (num === 2) { var gte = 2; var lte = 3 }
    else if (num === 3) { var gte = 3; var lte = 4 }
    else if (num == 4) { var gte = 4; var lte = 5 }

    if (location !== '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                rating_gte: gte,
                rating_lte: lte,
                location: location
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
    else {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                rating_gte: gte,
                rating_lte: lte
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
}

//sort by date 

export const getJobsByDate = (job, location, value) => (dispatch) => {
    if (location !== '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                location: location,
                _sort: 'date',
                _order: value
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
    else {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                _sort: 'date',
                _order: value
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
}
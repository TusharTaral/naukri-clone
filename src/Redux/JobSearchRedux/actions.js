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
    dispatch(getJobRequest())

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
    dispatch(getJobRequest())

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
    var gte; var lte
    if (num === 0) { gte = 0; lte = 1 }
    else if (num === 1) { gte = 1; lte = 2 }
    else if (num === 2) { gte = 2; lte = 3 }
    else if (num === 3) { gte = 3; lte = 4 }
    else if (num === 4) { gte = 4; lte = 5 }

    dispatch(getJobRequest())

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
    dispatch(getJobRequest())

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

//filtering by experience

export const getJobsByExp = (job, location, num) => (dispatch) => {
    var gte; var lte
    if (num === 0) { gte = 0; lte = 2 }
    else if (num === 1) { gte = 0; lte = 3 }
    else if (num === 2) { gte = 1; lte = 3 }
    else if (num === 3) { gte = 2; lte = 4 }
    else if (num === 4) { gte = 3; lte = 5 }
    else if (num === 5) { gte = 4; lte = 7 }
    else if (num === 6) { gte = 5; lte = 8 }
    else if (num === 7) { gte = 6; lte = 9 }
    else if (num === 8) { gte = 7; lte = 10 }
    else if (num === 9) { gte = 8; lte = 10 }
    else if (num === 10) { gte = 9; lte = 12 }
    else if (num === 11) { gte = 10; lte = 12 }
    else if (num === 12) { gte = 11; lte = 13 }

    dispatch(getJobRequest())

    if (location !== '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                location: location,
                experience_gte: gte,
                experience_lte: lte
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
    else {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                experience_gte: gte,
                experience_lte: lte
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
}

//filter by salary

export const getJobsBySalary = (job, num, location) => (dispatch) => {
    var gte; var lte
    if (num === 0) { gte = 5000; lte = 30000 }
    else if (num === 3) { gte = 30000; lte = 60000 }
    else if (num === 6) { gte = 60000; lte = 100000 }
    else if (num === 10) { gte = 100000; lte = 150000 }

    dispatch(getJobRequest())

    if (location !== '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                salary_gte: gte,
                salary_lte: lte,
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
                salary_gte: gte,
                salary_lte: lte
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    }
}
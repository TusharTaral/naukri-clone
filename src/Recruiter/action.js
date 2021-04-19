import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
  } from "./actionType";
  import axios from "axios";
  export const registerRequest = () => {
    return {
      type: REGISTER_REQUEST
    };
  };
  export const registerSuccess = (payload) => {
    return {
      type: REGISTER_SUCCESS,
      payload
    };
  };
  export const registerFailure = (payload) => {
    return {
      type: REGISTER_FAILURE,
      payload: payload
    };
  };
  
  export const registerUser = (payload) => (dispatch) => {
    dispatch(registerRequest());
    const requestParam = {
      'url': "https://json-server-vedanshw.herokuapp.com/naukri",
      'method': "post",
      'data': payload,
      'headers': {
        "Content-Type": "application/json"
      }
    };
    return axios(requestParam)
      .then((response) => dispatch(registerSuccess("Register Success")))
      .catch((err) => dispatch(registerFailure("Register fail")));
  };
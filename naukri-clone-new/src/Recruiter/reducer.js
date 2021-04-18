import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
  } from "./actionType";
  
  const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    data:[]
  };
  
  export const recruiterReducer = (state = initState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isAuth: true,
          isLoading: false,
          data: payload
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          isError: true,
          isLoading: false,
          data: payload
        };
  
      default:
        return state;
    }
  };
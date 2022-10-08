import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes";

export const getRequest = () => {
  return {
    type: GET_REQUEST
  };
};

export const getFailure = () => {
  return {
    type: GET_FAILURE
  };
};

export const getSuccess = (payload) => {
  return {
    type: GET_SUCCESS,
    payload
  };
};

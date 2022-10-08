import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  loading: false,
  error: false,
  countCorrect: 0,
  countInCorrect: 0
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case GET_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...payload]
      };
    }
    default:
      return state;
  }
};

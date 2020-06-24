import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

// Get Techs from server
export const getTechs = () => async (dispatch) => {
  // some error handling
  try {
    setLoading();

    // Fetch req
    const res = await fetch("/techs");
    const data = await res.json();

    // Dispatch
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

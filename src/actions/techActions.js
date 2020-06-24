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

// Add Technician to server
export const addTech = (tech) => async (dispatch) => {
  // some error handling
  try {
    setLoading();

    // Fetch req
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    // Dispatch
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Delete Tech from server
export const deleteTechs = (id) => async (dispatch) => {
  // some error handling
  try {
    setLoading();

    // Fetch req
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    // Dispatch
    dispatch({
      type: DELETE_TECH,
      payload: id,
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

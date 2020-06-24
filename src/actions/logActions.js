import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     // Fetch req
//     const res = await fetch("/logs");
//     const data = await res.json();

//     // Dispatch
//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

// Get logs from server
export const getLogs = () => async (dispatch) => {
  // Refactored with some error handling
  try {
    setLoading();

    // Fetch req
    const res = await fetch("/logs");
    const data = await res.json();

    // Dispatch
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../actions/types";

// State
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  // evaulate with a switch
  switch (action.type) {
    // GET LOGS
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };

    // ADD LOG
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };

    // DELETE LOG
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };

    // UPDATE LOG
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };

    // SEARCH LOGS
    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };

    // SET CURRENT
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    // CLEAR CURRENT
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    // SET LOADING
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    // LOGS ERROR
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    // DEFAULT STATE
    default:
      return state;
  }
};

import {
  ALL_EVENTS_FAIL,
  ALL_EVENTS_REQUEST,
  ALL_EVENTS_SUCCESS,
  CLEAR_ERRORS,
} from "../types/eventType";

export const allEventsReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case ALL_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };

    case ALL_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

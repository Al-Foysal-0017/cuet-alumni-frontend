import axios from "axios";
import {
  ALL_EVENTS_REQUEST,
  ALL_EVENTS_SUCCESS,
  ALL_EVENTS_FAIL,
} from "../types/eventType";

// GET ALL EVENTS
export const getAllEvents = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_EVENTS_REQUEST });
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/events`);

    dispatch({ type: ALL_EVENTS_SUCCESS, payload: data.response });
  } catch (error) {
    dispatch({ type: ALL_EVENTS_FAIL, payload: error.response.data });
  }
};

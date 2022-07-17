// "proxy": "http://192.168.1.100:5000"

import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  // LOAD_USER_REQUEST,
  // LOAD_USER_SUCCESS,
  // LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  // LOGOUT_FAIL,
  // UPDATE_PROFILE_REQUEST,
  // UPDATE_PROFILE_SUCCESS,
  // UPDATE_PROFILE_FAIL,
  // UPDATE_PASSWORD_REQUEST,
  // UPDATE_PASSWORD_SUCCESS,
  // UPDATE_PASSWORD_FAIL,
  // FORGOT_PASSWORD_REQUEST,
  // FORGOT_PASSWORD_SUCCESS,
  // FORGOT_PASSWORD_FAIL,
  // RESET_PASSWORD_REQUEST,
  // RESET_PASSWORD_SUCCESS,
  // RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  // DELETE_USER_REQUEST,
  // DELETE_USER_SUCCESS,
  // DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
  ACTIVATION_REQUEST,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  CLEAR_MESSAGE,
  // USER_ROLE_REQUEST,
  // USER_ROLE_SUCCESS,
  // USER_DETAILS_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_FAIL,
} from "../types/userConstants";
import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { authenticate } from "../../helpers/auth";

// Login
export const login = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/signin`,
      loginData,
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });

    // localStorage.setItem("token", data.token);
    window.location.reload();
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response.data.message || "Something went wrong. Try again.",
    });
  }
};

// SignUp
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/signup/verify`,
      userData,
      config
    );
    // console.log(data);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    // localStorage.setItem("token", data.token);
    window.location.reload();
  } catch (error) {
    // console.log(error.response.data);
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data || "Something went wrong. Try again.",
    });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/profile/update`,
      userData,
      config
    );
    // console.log(data);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload:
        error.response.data.message || "Something went wrong. Try again.",
    });
  }
};

//Activation User
export const activation = (token) => async (dispatch) => {
  try {
    dispatch({ type: ACTIVATION_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/activation`,
      { token },
      config
    );
    dispatch({ type: ACTIVATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTIVATION_FAIL, payload: error.response.data });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/me`);

    // console.log("FromLoadUser:>>>>", data.user);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload:
        error.response.data.message || "Something went wrong. Try again.",
    });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${process.env.REACT_APP_API_URL}/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload:
        error.response.data.message || "Something went wrong. Try again.",
    });
  }
};
// Update Profile
// export const updateProfile = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PROFILE_REQUEST });

//     const config = { headers: { "Content-Type": "multipart/form-data" } };

//     const { data } = await axios.put(`/api/v1/me/update`, userData, config);

//     dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PROFILE_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Update Password
// export const updatePassword = (passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PASSWORD_REQUEST });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.put(
//       `/api/v1/password/update`,
//       passwords,
//       config
//     );

//     dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PASSWORD_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Forgot Password
// export const forgotPassword = (email) => async (dispatch) => {
//   try {
//     dispatch({ type: FORGOT_PASSWORD_REQUEST });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.post(`/api/v1/password/forgot`, email, config);

//     dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
//   } catch (error) {
//     dispatch({
//       type: FORGOT_PASSWORD_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Reset Password
// export const resetPassword = (token, passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: RESET_PASSWORD_REQUEST });

//     const config = { headers: { "Content-Type": "application/json" } };

//     const { data } = await axios.put(
//       `/api/v1/password/reset/${token}`,
//       passwords,
//       config
//     );

//     dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: RESET_PASSWORD_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// get All Users
export const getAllUsers = () => async (dispatch, getState) => {
  try {
    // const {
    //   user: { token },
    // } = getState();
    // console.log("tokenFromUSERS:>>", user);
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/users/request`
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    // console.log(data.users);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    // console.log("errorFromUSERS:>>", error);
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data });
  }
};

// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/user/${id}`
    );

    console.log(data);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

// Update User
export const updateUserRole = (id, userData) => async (dispatch, getState) => {
  // const {
  //   user: { token },
  // } = getState();
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/admin/user/${id}`,
      userData,
      config
    );

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    dispatch(getAllUsers());
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Role of User
// export const getRoleOfUser = (id) => async (dispatch, getState) => {
//   const {
//     user: { token },
//   } = getState();
//   try {
//     dispatch({ type: USER_ROLE_REQUEST });

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.get(
//       `${process.env.REACT_APP_API_URL}/role/user/${id}`,
//       config
//     );

//     dispatch({ type: USER_ROLE_SUCCESS, payload: data.role });
//   } catch (error) {
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Delete User
// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_USER_REQUEST });

//     const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

//     dispatch({ type: DELETE_USER_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: DELETE_USER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Clearing Message
export const clearMessage = () => async (dispatch) => {
  dispatch({ type: CLEAR_MESSAGE });
};

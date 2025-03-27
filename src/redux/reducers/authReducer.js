import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../actions/authActions";
  
  const initialState = {
    user: null,
    token: localStorage.getItem("authToken") || null,
    loading: false,
    error: null,
    successMessage: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // 🔹 User Signup
      case CREATE_USER_REQUEST:
        return { ...state, loading: true, error: null, successMessage: null };
  
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          successMessage: action.payload.message, // Store success message
        };
  
      case CREATE_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      // 🔹 User Login
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          token: action.payload.token,
        };
  
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
import {
    DEPOSIT_REQUEST,
    DEPOSIT_SUCCESS,
    DEPOSIT_FAIL,
    DISBURSE_REQUEST,
    DISBURSE_SUCCESS,
    DISBURSE_FAIL,
  } from "../actions/momoActions";
  
  const initialState = {
    loading: false,
    success: false,
    message: "",
    reference: null,
    error: null,
  };
  
  export const momoReducer = (state = initialState, action) => {
    switch (action.type) {
      case DEPOSIT_REQUEST:
      case DISBURSE_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
          message: "",
        };
  
      case DEPOSIT_SUCCESS:
      case DISBURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          message: action.payload.message,
          reference: action.payload.reference,
        };
  
      case DEPOSIT_FAIL:
      case DISBURSE_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
import {
    CREATE_INVOICE_REQUEST,
    CREATE_INVOICE_SUCCESS,
    CREATE_INVOICE_FAIL,
    GET_INVOICE_STATUS_REQUEST,
    GET_INVOICE_STATUS_SUCCESS,
    GET_INVOICE_STATUS_FAIL,
  } from "../actions/bitcoinActions";
  
  const initialState = {
    loading: false,
    invoice: null,
    error: null,
    invoiceStatus: null,
  };
  
  export const bitcoinInvoiceReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_INVOICE_REQUEST:
        return { ...state, loading: true, error: null };
  
      case CREATE_INVOICE_SUCCESS:
        return { ...state, loading: false, invoice: action.payload, error: null };
  
      case CREATE_INVOICE_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      case GET_INVOICE_STATUS_REQUEST:
        return { ...state, loading: true, error: null };
  
      case GET_INVOICE_STATUS_SUCCESS:
        return { ...state, loading: false, invoiceStatus: action.payload, error: null };
  
      case GET_INVOICE_STATUS_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
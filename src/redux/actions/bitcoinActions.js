import API from "../../utils/api";

// Action Types
export const CREATE_INVOICE_REQUEST = "CREATE_INVOICE_REQUEST";
export const CREATE_INVOICE_SUCCESS = "CREATE_INVOICE_SUCCESS";
export const CREATE_INVOICE_FAIL = "CREATE_INVOICE_FAIL";

export const GET_INVOICE_STATUS_REQUEST = "GET_INVOICE_STATUS_REQUEST";
export const GET_INVOICE_STATUS_SUCCESS = "GET_INVOICE_STATUS_SUCCESS";
export const GET_INVOICE_STATUS_FAIL = "GET_INVOICE_STATUS_FAIL";

// Action Creator: Create Lightning Invoice
export const createInvoice = (amount, description) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_INVOICE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await API.post(
      "/api/bitcoin/create-invoice", // your backend route for creating invoice
      { amount, description },
      config
    );

    dispatch({
      type: CREATE_INVOICE_SUCCESS,
      payload: data.data, // invoice data from backend response
    });
  } catch (error) {
    dispatch({
      type: CREATE_INVOICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Action Creator: Get Invoice Status
export const getInvoiceStatus = (invoiceId) => async (dispatch) => {
  try {
    dispatch({ type: GET_INVOICE_STATUS_REQUEST });

    const { data } = await API.get(`/api/invoices/status/${invoiceId}`);

    dispatch({
      type: GET_INVOICE_STATUS_SUCCESS,
      payload: data.data, // invoice status data
    });
  } catch (error) {
    dispatch({
      type: GET_INVOICE_STATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

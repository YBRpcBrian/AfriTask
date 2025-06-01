import API from "../../utils/api";

// Action Types
export const DEPOSIT_REQUEST = "DEPOSIT_REQUEST";
export const DEPOSIT_SUCCESS = "DEPOSIT_SUCCESS";
export const DEPOSIT_FAIL = "DEPOSIT_FAIL";

export const DISBURSE_REQUEST = "DISBURSE_REQUEST";
export const DISBURSE_SUCCESS = "DISBURSE_SUCCESS";
export const DISBURSE_FAIL = "DISBURSE_FAIL";

// Deposit Action Creator
export const deposit = (number, amount) => async (dispatch) => {
  try {
    dispatch({ type: DEPOSIT_REQUEST });

    const response = await API.post("/api/momo/deposit", { number, amount });

    dispatch({
      type: DEPOSIT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DEPOSIT_FAIL,
      payload:
        error.response && error.response.data?.error
          ? error.response.data.error
          : error.message,
    });
  }
};

// Disburse Action Creator
export const disburse = (number, amount) => async (dispatch) => {
  try {
    dispatch({ type: DISBURSE_REQUEST });

    const response = await API.post("/api/momo/disburse", { number, amount });

    dispatch({
      type: DISBURSE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DISBURSE_FAIL,
      payload:
        error.response && error.response.data?.error
          ? error.response.data.error
          : error.message,
    });
  }
};

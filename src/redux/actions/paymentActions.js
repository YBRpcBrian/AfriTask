import API from "../../utils/api";

// Action Types
export const DEPOSIT_REQUEST = "DEPOSIT_REQUEST";
export const DEPOSIT_SUCCESS = "DEPOSIT_SUCCESS";
export const DEPOSIT_FAIL = "DEPOSIT_FAIL";

// Deposit Money Action
export const depositMoney = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: DEPOSIT_REQUEST });

    // Get user token from Redux state
    const { auth: { user } } = getState();
    const token = user?.token;

    const config = {
      headers: {
        "Content-Type": "application/json", // Since we're sending JSON now
        Authorization: `Bearer ${token}`,
      },
    };

    // Prepare request data
    const depositData = {
      userId: user.id,
      fullName: formData.fullName,
      email: formData.email,
      type: "deposit", // Default to deposit
      paymentMethod: formData.paymentMethod,
      momoName: formData.momoName,
      momoNumber: formData.momoNumber,
      amount: Number(formData.amount), // Ensure it's a number
    };

    console.log("Sending deposit request:", depositData); // Log data before sending

    // Send deposit request to backend
    const { data } = await API.post("/api/wallet/transaction", depositData, config);

    console.log("Deposit response received:", data); // Log response data

    dispatch({
      type: DEPOSIT_SUCCESS,
      payload: data, // Assuming data contains the paymentLink
    });

    // Return the paymentLink so it can be used in the component
    return data.paymentLink;

  } catch (error) {
    console.error("Deposit request failed:", error.response?.data || error.message); // Log error

    dispatch({
      type: DEPOSIT_FAIL,
      payload: error.response?.data?.message || error.message,
    });

    alert(error.response?.data?.message || "Deposit request failed!");
  }
};

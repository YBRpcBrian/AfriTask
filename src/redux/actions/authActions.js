import API from "../../utils/api";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// 🚀 Create User (Signup)
export const createUser = (userData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const response = await API.post("/api/auth/register", userData, config);
  
      dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
  
      return { success: true, message: response.data.message }; // Return success response
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Signup failed";
      dispatch({ type: CREATE_USER_FAILURE, payload: errorMessage });
  
      return { success: false, message: errorMessage }; // Return error response
    }
  };
  

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const config = { headers: { "Content-Type": "application/json" } };
    const response = await API.post("/api/auth/login", credentials, config);

    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });

    // Store user token in localStorage
    localStorage.setItem("authToken", response.data.token);

    return { success: true };
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed";
    dispatch({ type: "LOGIN_FAILURE", payload: errorMessage });

    return { success: false, message: errorMessage };
  }
};

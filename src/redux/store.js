import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk'; // Use named import instead of default
import { authReducer } from "./reducers/authReducer";


// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer, // Add more reducers here if needed
});

// Create Redux store without Redux DevTools
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

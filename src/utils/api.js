import axios from "axios";

const API = axios.create({
  baseURL: "https://afritask-backend.onrender.com", // Change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically add token if user is authenticated
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

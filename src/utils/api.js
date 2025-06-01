import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Change this to your backend URL
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

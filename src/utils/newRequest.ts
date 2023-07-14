import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://api-congviet.onrender.com/api",
  // baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default newRequest;

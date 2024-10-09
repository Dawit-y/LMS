import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   const tokens = JSON.parse(localStorage.getItem("tokens"));
//   if (tokens) {
//     config.headers.Authorization = `JWT ${tokens.access}`;
//   }
//   return config;
// });

export default api;

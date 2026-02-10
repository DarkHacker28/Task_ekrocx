import axios from "axios";


// Base API instance
const api = axios.create({
baseURL: "http://localhost:5000/api", // backend base URL
headers: {
"Content-Type": "application/json",
},
});


// ===================== REQUEST INTERCEPTOR =====================
// Attach JWT token automatically to every request


api.interceptors.request.use(
(config) => {
const token = localStorage.getItem("token");


if (token) {
config.headers.Authorization = `Bearer ${token}`;
}


return config;
},
(error) => Promise.reject(error)
);


// ===================== RESPONSE INTERCEPTOR =====================
// Global error handling


api.interceptors.response.use(
(response) => response,
(error) => {
const message =
error?.response?.data?.message ||
error?.message ||
"Something went wrong";


console.error("API Error:", message);


// Auto logout if token expired
if (error?.response?.status === 401) {
localStorage.removeItem("token");
localStorage.removeItem("user");
window.location.href = "/login";
}


return Promise.reject(message);
}
);


// ===================== AUTH APIS =====================


export const loginAPI = (payload) => api.post("/auth/login", payload);
export const registerAPI = (payload) => api.post("/auth/register", payload);
export const getProfileAPI = () => api.get("/auth/profile");


// ===================== DASHBOARD APIS =====================


export const getDashboardStatsAPI = () => api.get("/dashboard/stats");
export const getRecentOrdersAPI = () => api.get("/dashboard/orders");


// ===================== USER APIS =====================


export const getUsersAPI = () => api.get("/users");
export const getUserByIdAPI = (id) => api.get(`/users/${id}`);
export const updateUserAPI = (id, payload) => api.put(`/users/${id}`, payload);
export const deleteUserAPI = (id) => api.delete(`/users/${id}`);


export default api;
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


const API = "http://localhost:5000/api"; // change if needed


// Load user from localStorage on refresh
useEffect(() => {
const token = localStorage.getItem("token");
const userData = localStorage.getItem("user");


if (token && userData) {
setUser(JSON.parse(userData));
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


setLoading(false);
}, []);


// LOGIN
const login = async (email, password) => {
const { data } = await axios.post(`${API}/auth/login`, { email, password });


localStorage.setItem("token", data.token);
localStorage.setItem("user", JSON.stringify(data.user));


axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;


setUser(data.user);
};


// REGISTER
const register = async (name, email, password) => {
const { data } = await axios.post(`${API}/auth/register`, {
name,
email,
password,
});


localStorage.setItem("token", data.token);
localStorage.setItem("user", JSON.stringify(data.user));


axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;


setUser(data.user);
};


// LOGOUT
const logout = () => {
localStorage.removeItem("token");
localStorage.removeItem("user");
delete axios.defaults.headers.common["Authorization"];
setUser(null);
};


return (
<AuthContext.Provider
value={{ user, login, register, logout, loading, isAuth: !!user }}
>
{!loading && children}
</AuthContext.Provider>
);
};


export const useAuth = () => useContext(AuthContext);




};
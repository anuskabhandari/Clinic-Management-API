import axios from "axios";


const API = axios.create({
 baseURL: "/api/",
});


// Attach JWT token
API.interceptors.request.use((req) => {
 const token = localStorage.getItem("token");


 if (token) {
   req.headers.Authorization = `Bearer ${token}`;
 }


 return req; // VERY IMPORTANT
});


export default API;


// API endpoints
export const getPatients = () => API.get("clinic/patient/");
export const addPatient = (data) => API.post("clinic/patient/", data);
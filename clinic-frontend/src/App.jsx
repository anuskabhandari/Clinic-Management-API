import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/assets/pages/Login";
import PatientList from "../src/assets/pages/PatientList";


function App() {
 const isAuthenticated = localStorage.getItem("token");


 return (
   <BrowserRouter>
     <div style={{ textAlign: "center" }}>
       <h1>Clinic App</h1>


       <Routes>
         {/* Login Page */}
         <Route path="/register" element={<RegisterPages />} />
         <Route path="/login" element={<Login />} />


         {/* Protected Route */}
         <Route
           path="/"
           element={
             isAuthenticated ? <PatientList /> : <Navigate to="/login" />
           }
         />
       </Routes>
     </div>
   </BrowserRouter>
 );
}


export default App;
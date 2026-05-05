import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./assets/pages/Login.jsx";
import PatientList from "./assets/pages/PatientList";
import DoctorList from "./assets/pages/DoctorList";
import RegisterPatient from "./assets/pages/RegisterPatient";
import RegisterDoctor from "./assets/pages/RegisterDoctor";
import HomePage from "./assets/pages/HomePage";

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <h1>Clinic App</h1>

        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPatient />} />
          <Route path="/register_doctor" element={<RegisterDoctor />} />
          <Route path="/home-page" element={<HomePage />} />

          {/* Protected Routes */}
          <Route
            path="/patient-list"
            element={
              isAuthenticated ? <PatientList /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/doctor-list"
            element={
              isAuthenticated ? <DoctorList /> : <Navigate to="/login" />
            }
          />

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/home-page" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
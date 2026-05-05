import { useState } from "react";
import { registerPatient } from "../../services/api";
import { useNavigate } from 'react-router-dom';


function RegisterPatient() {
 const [username, setUserName] = useState("");
 const [password, setPassword] = useState("");


 const navigate = useNavigate();


 const handleSubmit = (e) => {
   e.preventDefault();


   registerPatient({ username, password ,role: "patient"})
     .then(() => {
       alert("Patient registered!");
      navigate("/");
     })
     .catch((err) => {
         console.log("full error:",err);
         console.log("response data error:",err.response?.data);


         console.log("status:",err.response?.status);
       alert(JSON.stringify(err.response?.data));
     });
 };


 return (
   <form onSubmit={handleSubmit}>
     <h2>Register Patient</h2>


     <input
       placeholder="Username"
       value={username}
       onChange={(e) => setUserName(e.target.value)}
     />


     <input
       placeholder="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
     />


     <button type="submit">Register</button>
   </form>
 );
}


export default RegisterPatient;
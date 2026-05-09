import { useEffect, useState } from "react";
import { getPatients } from "../services/api";

function PatientList() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const res = await getPatients();
      setPatients(res.data);
    } catch (error) {
      console.log("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>

      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        patients.map((p) => (
          <div key={p.id}>
            <p>
              {p.name} - {p.age}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default PatientList;
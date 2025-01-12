import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3002/employees");
        setEmployees(response.data);
      } catch (err) {
        setError("Failed to fetch employees data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="list">
      {employees.map((employee) => {
        return (
          <>
            <EmployeeCard key={employee.id} {...employee} />
          </>
        );
      })}
    </div>
  );
};

export default EmployeeList;

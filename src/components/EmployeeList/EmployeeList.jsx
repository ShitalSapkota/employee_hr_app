import { useEffect } from "react";
import useAxios from "../../hooks/useAxios.js";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import styles from "./EmployeeList.module.css";

const EmployeeList = () => {
  const {
    data: employees,
    loading,
    error,
    read,
  } = useAxios("https://my-json-server.typicode.com/shitalsapkota/mock-api/db");

  useEffect(() => {
    read("employees");
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.list}>
      {(employees || []).map((employee) => {
        return <EmployeeCard key={employee.id} {...employee} />;
      })}
    </div>
  );
};

export default EmployeeList;

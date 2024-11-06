import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";
import teachersData from "../../teachersData";
import { useState } from "react";
const EmployeeList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h2 className="list-title">List of the Employees (Teachers)</h2>
      <main></main>
    </div>
  );
};

export default EmployeeList;

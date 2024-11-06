import "./EmployeeCard.css";
import { useState } from "react";

const EmployeeCard = (props) => {
  const [role, setRole] = useState(props.role);
  // role is variable and setRole is method for changing value

  const clickButton = () => {
    //console.log("test")
    if (role == props.role) {
      setRole("Team Lead  ⭐");
    } else {
      setRole(props.role);
    }
  };

  /* Counting years of experience */

  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Role: {role}</p>
      <p>Department: {props.department} </p>
      <p>Salary: {props.salary} </p>
      <p>Start Date: {props.start_date} </p>
      <p>Location: {props.location} </p>
      <button onClick={clickButton}>
        {role === "Team Lead  ⭐" ? "Demote" : "Promote"}
      </button>
    </div>
  );
};

export default EmployeeCard;

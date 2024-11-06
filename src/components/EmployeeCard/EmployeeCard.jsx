import "./EmployeeCard.css";
import { useState } from "react";

const EmployeeCard = (props) => {
  const [role, setRole] = useState(props.initialRole);
  // role is variable and setRole is method for changing value

  const clickButton = () => {
    //console.log("test")
    if (role == props.initialRole) {
      setRole("Team Lead");
    } else {
      setRole(props.initialRole);
    }
  };

  return (
    <div className="displayCards">
      <div className="card">
        <p>Name: {props.name}</p>
        <p>Role: {role} </p>
        <p>Department: {props.department} </p>
        <p>Salary: {props.salary} </p>
        <p>Location: {props.location} </p>
        <button onClick={clickButton}>Promote</button>
      </div>
    </div>
  );
};

export default EmployeeCard;

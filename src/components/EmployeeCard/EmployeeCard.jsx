import "./EmployeeCard.css";
import { useState } from "react";
import Button from "../Button/Button";

const EmployeeCard = ({
  name,
  age,
  role,
  department,
  salary,
  start_date,
  location,
}) => {
  const [ini_role, setRole] = useState(role);
  // role is variable and setRole is method for changing value

  /* need to promote with star and should contain previous role as well */

  const clickButton = () => {
    //console.log("test")
    if (ini_role == role) {
      setRole("Team Lead  ⭐");
    } else {
      setRole(role);
    }
  };

  /* Counting years of experience */

  return (
    <div className="card">
      <div className="card-image">
        <img src={`https://robohash.org/${name}?set=set5`} alt="" />
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Role: {ini_role}</p>
        <p>Department: {department} </p>
        <p>Salary: {salary} </p>
        <p>Start Date: {start_date} </p>
        <p>Location: {location} </p>
        <Button
          click={clickButton}
          text={role === "Team Lead  ⭐" ? "Demote" : "Promote"}
        />
      </div>
    </div>
  );
};

export default EmployeeCard;

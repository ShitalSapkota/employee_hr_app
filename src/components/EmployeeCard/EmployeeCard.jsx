import { useState } from "react";
import Button from "../Button/Button";
import "./EmployeeCard.css";
import calcYearsWorked from "../utilis/yearsCalc";

const EmployeeCard = (props) => {
  const [promotedRole, setRole] = useState(false);

  const yearsWorked = calcYearsWorked(props.start_date);

  const isProbation = yearsWorked < 0.5;
  const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

  const clickHandler = () => {
    setRole(!promotedRole);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-image">
          <img src={`https://robohash.org/${props.name}?set=set5`} />
        </div>
        <p className="name">{props.name}</p>
        <div className="card-icons">
          {promotedRole && (
            <div>
              <span className="promote">⭐</span>
              <p>Team Lead</p>
            </div>
          )}
          {isAnniversary && (
            <div>
              <p className="card-icon-message">
                Schedule recognition meeting for {yearsWorked} years of service!
              </p>
            </div>
          )}

          {isProbation && (
            <div>
              <p className="card-icon-message">
                Schedule probation review. This employee has worked for less
                than 6 months.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="card-data">
          <p>Roll: {props.role}</p>
          <p>Department: {props.department}</p>
          <p>Location: {props.location}</p>
        </div>
      </div>
      <div className="card-footer">
        <Button
          onClick={clickHandler}
          text={promotedRole ? "Demote" : "Promote"}
        />
        <p className="years">
          {yearsWorked} <span>years in school </span>
          <span className="date">({props.start_date})</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;

import { useState } from "react";
import Button from "../Button/Button";
import "./EmployeeCard.css";
import calcYearsWorked from "../utilis/yearsCalc";

const EmployeeCard = ({
  name,
  age,
  role,
  department,
  location,
  start_date,
}) => {
  const [promotedRole, setRole] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [employee, setEmployee] = useState({ role, department, location });

  const yearsWorked = calcYearsWorked(start_date);

  const isProbation = yearsWorked < 0.5;
  const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

  const clickHandler = () => {
    setRole(!promotedRole);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const renderEditableField = (value, name) =>
    isEdit ? (
      <div className="inputField">
        <input value={value} name={name} onChange={handleInputChange} />
      </div>
    ) : (
      <p className={name}>{value}</p>
    );

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-image">
          <img src={`https://robohash.org/${name}?set=set5`} />
        </div>
        <p className="name">
          {name} ({age})
        </p>
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
          {renderEditableField(employee.role, "role")}
          {renderEditableField(employee.department, "department")}
          {renderEditableField(employee.location, "location")}
        </div>
      </div>
      <div className="card-footer">
        <Button
          onClick={clickHandler}
          text={promotedRole ? "Demote" : "Promote"}
        />
        <Button
          onClick={() => setIsEdit((prev) => !prev)}
          text={isEdit ? "Save" : "Edit"}
        />
        <p className="years">
          {yearsWorked} <span>years in school </span>
          <span className="date">({start_date})</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;

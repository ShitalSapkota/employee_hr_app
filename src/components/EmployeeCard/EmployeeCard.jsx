import { useState } from "react";
import Button from "../Button/Button";
import "./EmployeeCard.css";
import { useEmployeeStatus } from "../../hooks/useEmployeeStatus";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const EmployeeCard = ({ id, name, role, department, location, start_date }) => {
  const [promotedRole, setRole] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [employee, setEmployee] = useState({ role, department, location });
  const navigate = useNavigate();
  const { error, update } = useAxios("http://localhost:3002/");

  const { yearsWorked, isProbation, isAnniversary } =
    useEmployeeStatus(start_date);

  const clickHandler = () => {
    setRole(!promotedRole);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = async () => {
    update(`employees/${id}`, employee);
  };

  const renderEditableField = (value, name) =>
    isEdit ? (
      <div className="inputField">
        <input value={value} name={name} onChange={handleInputChange} />
      </div>
    ) : (
      <p className="card-data">{value}</p>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className="card">
      <div className="card-header">
        <p className="name">{name}</p>

        <div className="card-icons">
          {promotedRole && (
            <Tooltip title="Team Lead" position="bottom" trigger="mouseenter">
              <i class="fa-solid fa-star custom-color"></i>
            </Tooltip>
          )}
          {isAnniversary && (
            <Tooltip
              title={`Schedule recognition meeting for ${yearsWorked} years of service!`}
              position="bottom"
              trigger="mouseenter"
            >
              <i class="fa-solid fa-champagne-glasses custom-size"></i>
            </Tooltip>
          )}
          {isProbation && (
            <Tooltip
              title="Schedule probation review. This employee has worked for less than 6 months."
              position="bottom"
              trigger="mouseenter"
            >
              <i class="fa-solid fa-bell custom-size"></i>
            </Tooltip>
          )}
        </div>
      </div>

      <hr className="solid" />
      <div className="card-container">
        <div className="card-content">
          {renderEditableField(employee.role, "role")}
          {renderEditableField(employee.department, "department")}
          {renderEditableField(employee.location, "location")}
        </div>
        <div className="card-image">
          <img src={`https://robohash.org/${name}?set=set5`} />
        </div>
      </div>
      <div className="button-container">
        <Button
          onClick={clickHandler}
          text={promotedRole ? "Demote" : "Promote"}
          role="secondary"
        />
        <Button
          onClick={() => navigate(`/employee/${id}`)}
          text={"See more"}
          role="secondary"
        />
        <Button
          onClick={() => {
            if (isEdit) handleEdit();
            setIsEdit((prev) => !prev);
          }}
          text={isEdit ? "Save" : "Edit"}
          role="secondary"
        />
      </div>
      <p className="years">
        {yearsWorked} <span>years in school </span>
        <span className="date">({start_date})</span>
      </p>
    </div>
  );
};

export default EmployeeCard;

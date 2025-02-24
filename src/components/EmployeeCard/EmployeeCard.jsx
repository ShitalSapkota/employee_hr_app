import { useState } from "react";
import Button from "../Button/Button";
import styles from "./EmployeeCard.module.css";
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
  const { error, update } = useAxios(
    "https://my-json-server.typicode.com/shitalsapkota/mock-api/employees"
  );

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
      <div className={styles.inputField}>
        <input value={value} name={name} onChange={handleInputChange} />
      </div>
    ) : (
      <p className={styles.cardData}>{value}</p>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.name}>{name}</p>

        <div className={styles.cardIcons}>
          {promotedRole && (
            <Tooltip title="Team Lead" position="bottom" trigger="mouseenter">
              <i className={`fa-solid fa-star ${styles.customColor}`}></i>
            </Tooltip>
          )}
          {isAnniversary && (
            <Tooltip
              title={`Schedule recognition meeting for ${yearsWorked} years of service!`}
              position="bottom"
              trigger="mouseenter"
            >
              <i
                className={`fa-solid fa-champagne-glasses ${styles.customSize}`}
              ></i>
            </Tooltip>
          )}
          {isProbation && (
            <Tooltip
              title="Schedule probation review. This employee has worked for less than 6 months."
              position="bottom"
              trigger="mouseenter"
            >
              <i className={`fa-solid fa-bell  ${styles.customSize}`}></i>
            </Tooltip>
          )}
        </div>
      </div>

      <hr className={styles.solid} />
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          {renderEditableField(employee.role, "role")}
          {renderEditableField(employee.department, "department")}
          {renderEditableField(employee.location, "location")}
        </div>
        <div className={styles.cardImage}>
          <img src={`https://robohash.org/${name}?set=set5`} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
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
      <p className={styles.years}>
        {yearsWorked} <span>years in school </span>
        <span className={styles.date}>({start_date})</span>
      </p>
    </div>
  );
};

export default EmployeeCard;

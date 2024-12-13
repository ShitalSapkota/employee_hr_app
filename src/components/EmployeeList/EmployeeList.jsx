import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";

const EmployeeList = () => {
  return (
    <div className="list">
      <EmployeeCard name="Martin" initRole="teacher" department="ICT" />
      <EmployeeCard name="Meera" initRole="teacher" department="Software" />
      <EmployeeCard name="Matt" initRole="teacher" department="ICT" />
      <EmployeeCard name="Jonas" initRole="teacher" department="Backend" />
      <EmployeeCard name="Pradip" initRole="teacher" department="Frontend" />
    </div>
  );
};

export default EmployeeList;

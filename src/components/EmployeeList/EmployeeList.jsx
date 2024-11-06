import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";

const EmployeeList = () => {
  return (
    <div>
      <h2 className="list-title">List of the Employees</h2>
      <EmployeeCard
        name="Sara"
        initialRole="Admin"
        department="Management"
        salary="6000"
        location="Helsinki"
      />
      <EmployeeCard
        name="Veera"
        initialRole="Developer"
        department="IT"
        salary="4000"
        location="Espoo"
      />
      <EmployeeCard
        name="Joonas"
        initialRole="Teacher"
        department="ICT"
        salary="5000"
        location="Pasila"
      />
    </div>
  );
};

export default EmployeeList;

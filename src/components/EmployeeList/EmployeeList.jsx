import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";
import Button from "../Button/Button";
import teachersData from "../../data/teachersData";
import { useState } from "react";

const EmployeeList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <main>
      <h2 className="list-title">List of the Employees (Teachers)</h2>
      <Button click={clickHandler} text={isLoggedIn ? "Log Out" : "Log In"} />
      <div className="card-container">
        {isLoggedIn ? (
          teachersData.map((teacher) => (
            <div>
              <EmployeeCard
                key={teacher.id}
                // key should be provided always when using list/array for dynamic value
                {...teacher} // we can fetch all data at once like this
                /*    name={teacher.name}
                  age={teacher.age}
                  role={teacher.role}
                  department={teacher.department}
                  salary={teacher.salary}
                  start_date={teacher.start_date}
                  location={teacher.location} */
              />
            </div>
          ))
        ) : (
          <div>
            <p>Please Log in to see the lists</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default EmployeeList;

/* < EmployeeCard key= {employee.id} {...employee}> */

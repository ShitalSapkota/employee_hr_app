import Button from "../../components/Button/Button";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import styles from "./EmployeesListsPage.module.css";

const EmployeesListPage = () => {
  const {
    data: employees,
    loading,
    error,
    read,
  } = useAxios(
    `https://my-json-server.typicode.com/shitalsapkota/mock-api/employees`
  );

  useEffect(() => {
    read();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className={styles.nameListContainer}>
        <div className={styles.nameList}>
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(employees || []).map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>
                    <Button text={"Edit"} role="secondary" />
                    <Button text={"Delete"} role="secondary" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeesListPage;

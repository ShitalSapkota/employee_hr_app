import Button from "../components/Button/Button";

const EmployeesListPage = ({}) => {
  return (
    <>
      <div className="all-list">
        <p>{name}</p>
        <Button text={"Edit"} />
        <Button text={"Delete"} />
      </div>
    </>
  );
};

export default EmployeesListPage;

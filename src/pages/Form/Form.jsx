import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Button from "../../components/Button/Button";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState();
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const { create } = useAxios(
    "https://my-json-server.typicode.com/shitalsapkota/mock-api/"
  );

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "skills"
          ? value.split(",").map((skill) => skill.trim())
          : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      create("employees", formData);
      setSuccessMessage("Employee added successfully!");
    } catch (err) {
      console.error("Error adding employee:", err);
      setSuccessMessage("Failed to add employee data. Please try again!!");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      role: "",
      skills: [],
      department: "",
      salary: "",
      start_date: "",
      location: "",
    });
    setSuccessMessage(null);
  };

  return (
    <>
      {!successMessage ? (
        <form
          onChange={changeHandler}
          onSubmit={submitHandler}
          className={styles.employeeForm}
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" />
          <label htmlFor="name">Age</label>
          <input type="number" name="age" />
          <label htmlFor="name">Role</label>
          <input type="text" name="role" />
          <label htmlFor="skills">Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            placeholder="e.g., Node.js, MongoDB"
            required
          />
          <label htmlFor="name">Salary</label>
          <input type="text" name="salary" />
          <label htmlFor="name">Department</label>
          <input type="text" name="department" />
          <label htmlFor="name">Start Date</label>
          <input type="date" name="start_date" />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" />
          <Button text="Add new" type="submit" role="primary-bg" />
        </form>
      ) : (
        <div>
          <p>{successMessage}</p>
          <Button text="Back" onClick={() => navigate("/")} role="primary-bg" />
          <Button
            text="Add Another Employee"
            onClick={resetForm}
            role="primary-bg"
          />
        </div>
      )}
    </>
  );
};

export default Form;

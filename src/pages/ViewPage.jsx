import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import "./ViewPage.css";

const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/employees/${id}`
        );
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {details ? (
        <div className="singlePage-content">
          <div className="content-header">
            <h2>{details.name}</h2>
            <div className="skills">
              {details.skills.map((skill) => (
                <span key={skill}>{skill} </span>
              ))}
            </div>
          </div>
          <hr class="solid" />
          <div className="container">
            <div className="one">
              <p>
                <b>Age:</b> {details.age}
              </p>
              <p>
                <b>Email:</b> {details.email}
              </p>
              <p>
                <b>Phone:</b> {details.phone}
              </p>
              <p>
                <b>Role:</b> {details.role}
              </p>
            </div>
            <div className="two">
              <p>
                <b>Salary:</b> €{details.salary}
              </p>
              <p>
                <b>Department:</b> {details.department}
              </p>
              <p>
                <b>Location:</b> {details.location}
              </p>
              <p>
                <b>Start Date:</b> {details.start_date}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Button text="Back" role="primary-bg" onClick={() => navigate(-1)} />
    </div>
  );
};

export default ViewPage;

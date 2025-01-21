import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./ViewPage.css";
import useAxios from "../../hooks/useAxios";

const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, read } = useAxios(`http://localhost:3002/employees/${id}`);

  useEffect(() => {
    read();
  }, []);

  return (
    <div>
      {data ? (
        <div className="singlePage-content">
          <div className="content-header">
            <h2>{data.name}</h2>
            <div className="skills">
              {data.skills.map((skill) => (
                <span key={skill}>{skill} </span>
              ))}
            </div>
          </div>
          <hr className="solid" />
          <div className="container">
            <div className="one">
              <p>
                <b>Age:</b> {data.age}
              </p>
              <p>
                <b>Email:</b> {data.email}
              </p>
              <p>
                <b>Phone:</b> {data.phone}
              </p>
              <p>
                <b>Role:</b> {data.role}
              </p>
            </div>
            <div className="two">
              <p>
                <b>Salary:</b> €{data.salary}
              </p>
              <p>
                <b>Department:</b> {data.department}
              </p>
              <p>
                <b>Location:</b> {data.location}
              </p>
              <p>
                <b>Start Date:</b> {data.start_date}
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

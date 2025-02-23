import { useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ loginHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const checkCredentials = (e) => {
    e.preventDefault();
    if (
      username.toLowerCase() === "admin" &&
      password.toLowerCase() === "shital"
    ) {
      loginHandler();
      navigate("/");
    } else {
      setErrorMessage("Use correct credentials");
    }
  };

  return (
    <main>
      <form className={styles.loginForm} onSubmit={checkCredentials}>
        <p>Please log in</p>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
        </div>{" "}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <Button text="Log in" type="submit" />
      </form>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </main>
  );
};

export default Login;

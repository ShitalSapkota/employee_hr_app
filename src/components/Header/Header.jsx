import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = ({ isLoggedIn, loginHandler }) => {
  const buttonText = isLoggedIn ? "Log out" : "Log in";

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Employee Dashboard</h1>
      </Link>
      <div className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <Link to="employees"> Employees</Link>
            </li>
            <li>
              <Link to="new">Add new</Link>
            </li>
            <li>
              <Button onClick={loginHandler} text={buttonText} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

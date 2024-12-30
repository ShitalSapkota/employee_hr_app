import Button from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const buttonText = props.loginStatus ? "Log out" : "Log in";

  return (
    <header>
      <div>
        <h1>Employee Dashboard</h1>
      </div>
      <div>
        <Button onClick={props.onClick} text={buttonText} />
      </div>
    </header>
  );
};

export default Header;

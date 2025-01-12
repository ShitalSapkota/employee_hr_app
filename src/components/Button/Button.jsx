import "./Button.css";

const Button = ({ onClick, text, type = "button", role = "primary" }) => {
  return (
    <button onClick={onClick} type={type} className={`btn ${role}`}>
      {text}
    </button>
  );
};

export default Button;

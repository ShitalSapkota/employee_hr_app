import "./Button.css";

const Button = ({ onClick, text, type = "button" }) => {
  return (
    <button onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;

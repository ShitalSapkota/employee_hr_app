const Button = ({ text, click, type = "button" }) => {
  return (
    <button type={type} onClick={click}>
      {text}
    </button>
  );
};

export default Button;

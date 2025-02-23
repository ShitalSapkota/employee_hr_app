import styles from "./Button.module.css";

const Button = ({ onClick, text, type = "button", role = "primary" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.btn} ${styles[role]}`}
    >
      {text}
    </button>
  );
};

export default Button;

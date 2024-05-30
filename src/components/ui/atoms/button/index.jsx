import styles from "./button.module.css";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

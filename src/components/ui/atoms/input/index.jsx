import styles from "./input.module.css";

const Input = ({ inputRef, type, ...props }) => {
  return (
    <input
      className={styles.input}
      ref={inputRef}
      type={type}
      {...props}
    />
  );
};

export default Input;

import styles from "./label.module.css";
const Label = ({ htmlFor, children }) => {
  return (
    <label
      className={styles.label}
      htmlFor={htmlFor}
    >
      <span>{children}</span>
    </label>
  );
};

export default Label;

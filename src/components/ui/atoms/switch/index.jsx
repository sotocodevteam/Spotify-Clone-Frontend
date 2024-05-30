import styles from "./switch.module.css";
const Switch = ({ id, inputRef, ...props }) => {
  return (
    <div className={styles.switchLabel}>
      <input
        id={id}
        className={styles.switchInput}
        type="checkbox"
        ref={inputRef}
        {...props}
      />
      <span className={styles.switch}>
        <span className={styles.indicator}></span>
      </span>
    </div>
  );
};

export default Switch;

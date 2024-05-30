import styles from "./auth-card.module.css";
const AuthCard = ({ children, title }) => {
  return (
    <div className={styles.authCardContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.authCard}>{children}</div>
    </div>
  );
};

export default AuthCard;

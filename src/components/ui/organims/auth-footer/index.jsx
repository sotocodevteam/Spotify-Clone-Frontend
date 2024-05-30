import styles from "./auth-footer.module.css";
const AuthFooter = () => {
  return (
    <footer className={styles.authFooter}>
      <p className={styles.footerContent}>
        This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
      </p>
    </footer>
  );
};

export default AuthFooter;

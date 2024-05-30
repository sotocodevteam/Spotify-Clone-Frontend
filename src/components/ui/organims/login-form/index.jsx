import Button from "../../atoms/button";
import Switch from "../../atoms/switch";
import EmailInput from "../../molecules/email-input";
import PasswordInput from "../../molecules/password-input";
import styles from "./login-form.module.css";

const LoginForm = () => {
  return (
    <form className={styles.loginFormContainer}>
      <EmailInput />
      <PasswordInput />
      <label className={styles.remenber}>
        <Switch id="switch" />
        <span>Remember me</span>
      </label>
      <div>
        <div className={styles.LoginButton}>
          <Button>Log In</Button>
        </div>
        <div className={styles.forgot}>
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

import styles from "./social-auth.module.css";
import GoogleIcon from "@/assets/icons/google-icon";
import Button from "../../atoms/button";
import FacebookIcon from "@/assets/icons/facebook-icon";
import AppleIcon from "@/assets/icons/apple-icon";

const SocialAuth = () => {
  return (
    <div className={styles.socialauthContainer}>
      <Button variant="secondary">
        <GoogleIcon />
        <span>Continue with Google</span>
      </Button>
      <Button variant="secondary">
        <FacebookIcon />
        <span>Continue with Facebook</span>
      </Button>
      <Button variant="secondary">
        <AppleIcon />
        <span>Continue with Apple</span>
      </Button>
    </div>
  );
};

export default SocialAuth;

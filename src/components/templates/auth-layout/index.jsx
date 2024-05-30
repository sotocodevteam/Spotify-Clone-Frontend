import AuthHeader from "@/components/ui/organims/auth-header";
import styles from "./auth-layout.module.css";
import AuthFooter from "@/components/ui/organims/auth-footer";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <AuthHeader />
      <div className={styles.authContainer}>{children}</div>
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;

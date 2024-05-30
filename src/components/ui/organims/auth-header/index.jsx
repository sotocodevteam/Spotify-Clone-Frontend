import SpotifyLogo from "@/assets/icons/spotify-logo";
import styles from "./auth-header.module.css";

const AuthHeader = () => {
  return (
    <header className={styles.authHeaderContainer}>
      <div className={styles.logoContainer}>
        <SpotifyLogo fill="#fff" className={styles.logo} />
      </div>
    </header>
  );
};

export default AuthHeader;

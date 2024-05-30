import styles from "./sing-up.module.css";
const SingUp = () => {
  return (
    <div className={styles.singUp}>
      <span>{"Don't have an account?"}</span>
      <a href="#">Sign up for Spotify</a>
    </div>
  );
};

export default SingUp;

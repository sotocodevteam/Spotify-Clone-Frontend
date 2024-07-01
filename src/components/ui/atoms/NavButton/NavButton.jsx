import styles from "./navButton.module.css";

const NavButton = ({ href = "#", icon, text }) => {
  return (
    <a
      className={styles.navButton}
      href={href}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default NavButton;

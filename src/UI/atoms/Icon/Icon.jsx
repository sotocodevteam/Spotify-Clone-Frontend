import styles from "./Icon.module.css";

const Icon = ({ path, customClass, alt = "Icon" }) => {
  return <img className={`${styles.Icon} ${customClass}`} src={path} alt={alt} />;
};

export default Icon;

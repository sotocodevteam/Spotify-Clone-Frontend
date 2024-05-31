import styles from "./Subtitle.module.css";

const Subtitle = ({ text, customClass }) => {
    return <h2 className={`${styles.Subtitle} ${customClass}`}>{text}</h2>;
};

export default Subtitle;
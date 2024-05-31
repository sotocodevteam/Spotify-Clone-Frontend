import styles from "./Container.module.css";

const Container = ({ customClass, children }) => {
    return <section className={`${styles.Container} ${customClass}`}>{children}</section>;
};

export default Container;
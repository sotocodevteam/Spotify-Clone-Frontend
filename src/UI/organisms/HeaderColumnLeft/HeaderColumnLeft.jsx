import HeaderColumnLeftTop from "../../molecules/HeaderColumnLeftTop/HeaderColumnLeftTop";
import HeaderColumnLeftBottom from "../../molecules/HeaderColumnLeftBottom/HeaderColumnLeftBottom";
import styles from "./HeaderColumnLeft.module.css";

const HeaderColumnLeft = () => {
  return (
    <section className={styles.HeaderColumnLeft}>
      <HeaderColumnLeftTop />
      <HeaderColumnLeftBottom />
    </section>
  );
};

export default HeaderColumnLeft;

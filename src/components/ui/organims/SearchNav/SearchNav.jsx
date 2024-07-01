import styles from "./searchNav.module.css";
const SearchNav = () => {
  return (
    <div className={styles.top_nav}>
      <div className={styles.prev_btn}>
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div className={styles.search_box}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>¿Que quieres reproducir?</p>
        </div>
      </div>
      <div className={styles.login_btn}>
        <button className={styles.sign_up}>Registrate</button>
        <button className={styles.login}>Iniciar sesion</button>
      </div>
    </div>
  );
};

export default SearchNav;

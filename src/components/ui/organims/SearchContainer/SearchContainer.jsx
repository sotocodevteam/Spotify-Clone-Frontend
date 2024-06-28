import styles from "./searchContainer.module.css";
import SearchList from "../../molecules/SearchList/SearchList";
import SearchNav from "../SearchNav/SearchNav";

const SearchContainer = () => {
  return (
    <div className={styles.mainSection}>
      <SearchNav />
      <div>
        <h2>Explorar todo</h2>
        <SearchList />
      </div>
    </div>
  );
};

export default SearchContainer;

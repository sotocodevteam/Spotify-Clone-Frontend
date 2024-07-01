import SearchContainer from "../../ui/organims/SearchContainer/SearchContainer";
import Sidebar from "../../ui/organims/Sidebar/Sidebar";
import styles from "./searchPage.module.css";

const SearchPage = () => {
  return (
    <div className={styles.mainSection}>
      <Sidebar />
      <SearchContainer />
    </div>
  );
};

export default SearchPage;

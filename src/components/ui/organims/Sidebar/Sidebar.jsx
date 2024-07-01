import SidebarBody from "../../molecules/SidebarBody/SidebarBody";
import SidevarNav from "../../molecules/SidebarNav/SidebarNav";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={styles.left}>
      <SidevarNav />
      <SidebarBody />
    </aside>
  );
};

export default Sidebar;

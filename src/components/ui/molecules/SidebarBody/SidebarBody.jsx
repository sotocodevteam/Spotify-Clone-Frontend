import styles from "./sidebarBody.module.css";
import LibraryIcon from "../../../../assets/svg/LibraryIcon";
import SearchIcon from "../../../../assets/svg/SearchIcon";
import NavButton from "../../atoms/NavButton/NavButton";

const bodyButtons = [
  {
    icon: <LibraryIcon />,
    text: "Tu biblioteca",
    href: "#",
  },
  {
    icon: <SearchIcon />,
    text: "Buscar",
    href: "#",
  },
];
const SidebarBody = () => {
  return (
    <div className={styles.sidebarBody}>
      <div className="list">
        <ul>
          {bodyButtons.map(({ icon, text, href }) => (
            <li key={text}>
              <NavButton
                icon={icon}
                text={text}
                href={href}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarBody;

import styles from "./sidebarNav.module.css";
import HomeIcon from "../../../../assets/svg/HomeIcon";
import SearchIcon from "../../../../assets/svg/SearchIcon";
import SpotifyLogo from "../../../../assets/svg/SpotifyLogo";
import NavButton from "../../atoms/NavButton/NavButton";

const navButtons = [
  {
    icon: <HomeIcon />,
    text: "Inicio",
    href: "#",
  },
  {
    icon: <SearchIcon />,
    text: "Buscar",
    href: "#",
  },
];

const SidevarNav = () => {
  return (
    <div className={styles.sidebarNav}>
      <div className={styles.im}>
        <a href="#">
          <SpotifyLogo />
        </a>
      </div>
      <ul>
        {navButtons.map(({ icon, text, href }) => (
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
  );
};

export default SidevarNav;

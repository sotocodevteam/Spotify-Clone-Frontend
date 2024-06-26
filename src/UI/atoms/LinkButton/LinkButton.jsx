import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({ to, customClass, children }) => {
  return (
    <Link className={`${styles.LinkButton} ${customClass}`} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;

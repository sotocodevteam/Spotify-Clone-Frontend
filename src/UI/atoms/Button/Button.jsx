import styles from './Button.module.css';

const Button = ({ children, customClass }) => {
  return (
    <button className={`${styles.Button} ${customClass}`}>{children}</button>
  );
};

export default Button;

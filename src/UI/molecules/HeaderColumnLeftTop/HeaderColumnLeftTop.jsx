import LinkButton from '../../atoms/LinkButton/LinkButton';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../atoms/Container/Container';

import styles from './HeaderColumnLeftTop.module.css';

const HeaderColumnLeftTop = () => {
  return (
    <Container customClass={styles.HeaderColumnLeftTop}>
      <LinkButton
        to="/"
        customClass={`${styles.HeaderColumnLeftTop__Button} ${styles.HeaderColumnLeftTop__LogoButton}`}
      >
        <Icon
          path="/logo.svg"
          customClass={styles.HeaderColumnLeftTop__LogoButton_Icon}
        />
      </LinkButton>

      <LinkButton to="/" customClass={styles.HeaderColumnLeftTop__Button}>
        <Icon
          path="/home.svg"
          customClass={styles.HeaderColumnLeftTop__Button_Icon}
        />
        <Paragraph text="Home" />
      </LinkButton>

      <LinkButton to="/" customClass={styles.HeaderColumnLeftTop__Button}>
        <Icon
          path="/search.svg"
          customClass={styles.HeaderColumnLeftTop__Button_Icon}
        />
        <Paragraph text="Search" />
      </LinkButton>
    </Container>
  );
};

export default HeaderColumnLeftTop;

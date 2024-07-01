import LinkButton from '../../atoms/LinkButton/LinkButton';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../atoms/Container/Container';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import styles from './HeaderColumnLeftBottom.module.css';

const HeaderColumnLeftBottom = () => {
  return (
    <Container customClass={styles.HeaderColumnLeftBottom}>
      <div>
        <div className={styles.HeaderColumnLeftBottom__Buttons}>
          <Button
            customClass={styles.HeaderColumnLeftBottom__Buttons_LibButton}
          >
            <Icon
              path="/playlist.svg"
              customClass={
                styles.HeaderColumnLeftBottom__Buttons_LibButton_Icon
              }
            />
            <Paragraph text="Your Library" />
          </Button>

          <Button
            customClass={styles.HeaderColumnLeftBottom__Buttons_CreateButton}
          >
            <Icon
              path="/plus.svg"
              customClass={
                styles.HeaderColumnLeftBottom__Buttons_CreateButton_Icon
              }
            />
          </Button>
        </div>
        <div className="BannersContainer">
          <Container customClass={styles.HeaderColumnLeftBottom__Banner}>
            <Subtitle text="Create your first playlist" />
            <Paragraph
              text="it's easy, we'll help you"
              customClass={styles.HeaderColumnLeftBottom__Banner_Paragraph}
            />
            <Button customClass={styles.HeaderColumnLeftBottom__Banner_Button}>
              <Paragraph
                text="Create playlist"
                customClass={styles.HeaderColumnLeftBottom__Banner_Button_Text}
              />
            </Button>
          </Container>

          <Container customClass={styles.HeaderColumnLeftBottom__Banner}>
            <Subtitle text="Let's find some podcasts to follow" />
            <Paragraph
              text="We'll keep you updated on new episodes"
              customClass={styles.HeaderColumnLeftBottom__Banner_Paragraph}
            />
            <Button customClass={styles.HeaderColumnLeftBottom__Banner_Button}>
              <Paragraph
                text="Browse podcasts"
                customClass={styles.HeaderColumnLeftBottom__Banner_Button_Text}
              />
            </Button>
          </Container>
        </div>
      </div>

      <section className={styles.HeaderColumnLeftBottom__LegalContainer}>
        <div className={styles.HeaderColumnLeftBottom__Legal}>
          <LinkButton
            to="/"
            customClass={styles.HeaderColumnLeftBottom__Legal_Link}
          >
            Legal
          </LinkButton>
          <LinkButton
            to="/"
            customClass={styles.HeaderColumnLeftBottom__Legal_Link}
          >
            Safety & Privacy Center
          </LinkButton>
          <LinkButton
            to="/"
            customClass={styles.HeaderColumnLeftBottom__Legal_Link}
          >
            Privacy Policy
          </LinkButton>
          <LinkButton
            to="/"
            customClass={styles.HeaderColumnLeftBottom__Legal_Link}
          >
            Cookies
          </LinkButton>
          <LinkButton
            to="/"
            customClass={styles.HeaderColumnLeftBottom__Legal_Link}
          >
            About Ads
          </LinkButton>
          <LinkButton
            to="/"
            customClass={styles.HeaderColumnLeftBottom__Legal_Link}
          >
            Accessibility
          </LinkButton>
          <LinkButton
            to="/"
            customClass={styles.HeaderColumnLeftBottom__Legal_Link}
          >
            Cookies
          </LinkButton>
        </div>

        <Button customClass={styles.HeaderColumnLeftBottom__LanguageButton}>
          <Icon
            path="/globe.svg"
            customClass={styles.HeaderColumnLeftBottom__LanguageButton_Icon}
          />
          <Paragraph
            text="English"
            customClass={styles.HeaderColumnLeftBottom__LanguageButton_Text}
          />
        </Button>
      </section>
    </Container>
  );
};

export default HeaderColumnLeftBottom;

import styles from "./card.module.css";

const Card = ({ title, img, bgColour }) => {
  return (
    <div style={{ backgroundColor: bgColour }} className={styles.card}>
      <h2>{title}</h2>
      <div>
        <img
          aria-hidden="false"
          draggable="false"
          loading="lazy"
          src={img}
          alt=""
          className="b"
        ></img>
      </div>
    </div>
  );
};

export default Card;

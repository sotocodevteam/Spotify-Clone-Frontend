import Card from "../../atoms/Card/Card";
import styles from "./searchList.module.css";

const cards = [
  {
    title: "Eventos en vivo",
    image: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
    colour: "#8404e4",
  },
  {
    title: "Creados para ti",
    image: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
    colour: "#1c3464",
  },
  {
    title: "Nuevos lanzamientos",
    image: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
    colour: "#eb155c",
  },
  {
    title: "Latina",
    image: "https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30",
    colour: "#e3148c",
  },
  {
    title: "Pop",
    image: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
    colour: "#148c0c",
  },
  {
    title: "Hip hop",
    image: "https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f",
    colour: "#533453",
  },
  {
    title: "Rock",
    image: "https://i.scdn.co/image/ab67fb8200005cafda4c849095796a9e5d2c4ddb",
    colour: "#046454",
  },
  {
    title: "Rankings",
    image: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
    colour: "#8c64ac",
  },
  {
    title: "Cumbia",
    image: "https://i.scdn.co/image/ab67fb8200005caf65600929b4e7da6b813ce8b7",
    colour: "#549cf4",
  },
  {
    title: "Dance/Electronica",
    image: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
    colour: "#dc4404",
  },
  {
    title: "Estado de animo",
    image: "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354",
    colour: "#e3158c",
  },
  {
    title: "Indie",
    image: "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
    colour: "#ec142c",
  },
  {
    title: "Descubre",
    image: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
    colour: "#8c64ac",
  },
  {
    title: "Entrenamiento",
    image: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
    colour: "#727272",
  },
  {
    title: "Salsa",
    image: "https://i.scdn.co/image/ab67fb8200005caf18079442afeec2a30f3b9502",
    colour: "#438272",
  },
  {
    title: "Rhythm & Blues",
    image: "https://i.scdn.co/image/ab67fb8200005caff4e38be86ca48a3b10884ae3",
    colour: "#bc5c04",
  },
];

const SearchList = () => {
  return (
    <div className={styles.row}>
      {cards.map(({ title, image, link, colour }) => (
        <Card
          key={title}
          title={title}
          img={image}
          link={link}
          bgColour={colour}
        />
      ))}
    </div>
  );
};

export default SearchList;

import React from "react";
import AirDior from "../../assets/img/jordan-air-dior.jpg";
import FogHoodie from "../../assets/img/fear-of-god-hoodie.jpg";
import ConverseOW from "../../assets/img/converse-off-white.jpg";
import NewBalance from "../../assets/img/New-Balance-990v5.jpg";
import TravisDunks from "../../assets/img/travis-dunk.jpg";
import VlonePopSmoke from "../../assets/img/vlone-pop-smoke.jpg";
import Item from "./Item";
import styles from "./ItemList.module.css";

const DUMMY_ITEMS = [
  {
    id: "i1",
    img: AirDior,
    name: "Jordan 1 Retro High Dior",
    price: "$8,128",
  },
  {
    id: "i2",
    img: FogHoodie,
    name: "Fear of God Essentials Knit Pullover Hoodie",
    price: "$500",
  },
  {
    id: "i3",
    img: ConverseOW,
    name: "Converse x Off-White Vulcanized",
    price: "$500",
  },
  {
    id: "i4",
    img: NewBalance,
    name: "New Balance 990v5",
    price: "$500",
  },
  {
    id: "i5",
    img: VlonePopSmoke,
    name: "Fear Of God",
    price: "$500",
  },
  {
    id: "i6",
    img: TravisDunks,
    name: "Fear Of God",
    price: "$500",
  },
];

const list = DUMMY_ITEMS.map((item) => (
  <Item name={item.name} price={item.price} img={item.img} key={item.id} />
));

const ItemsList = () => {
  return (
    <section className={styles["items-section"]}>
      <ul className={styles["items-container"]}>{list}</ul>
    </section>
  );
};

export default ItemsList;

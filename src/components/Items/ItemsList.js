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
    price: "$490,00",
  },
  {
    id: "i3",
    img: ConverseOW,
    name: "Converse x Off-White Vulcanized",
    price: "$1030,00",
  },
  {
    id: "i4",
    img: NewBalance,
    name: "New Balance 990v5",
    price: "$240,00",
  },
  {
    id: "i5",
    img: VlonePopSmoke,
    name: "Vlone x Pop Smoke Tee",
    price: "$100,00",
  },
  {
    id: "i6",
    img: TravisDunks,
    name: "Fear Of God",
    price: "$2061,00",
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

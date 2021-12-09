import React, { useState } from "react";
import AirDior from "../../assets/img/jordan-air-dior.jpg";
import FogHoodie from "../../assets/img/fear-of-god-hoodie.jpg";
import ConverseOW from "../../assets/img/converse-off-white.jpg";
import NewBalance from "../../assets/img/New-Balance-990v5.jpg";
import TravisDunks from "../../assets/img/travis-dunk.jpg";
import VlonePopSmoke from "../../assets/img/vlone-pop-smoke.jpg";
import Item from "./Item";
import styles from "./ItemList.module.css";
import ItemsModal from "./ItemsModal";

const DUMMY_ITEMS = [
  {
    id: "i1",
    img: AirDior,
    name: "Jordan 1 Retro High Dior",
    price: "$8128,00",
    availableSize: [45, 44, 43, 42, 41],
  },
  {
    id: "i2",
    img: FogHoodie,
    name: "Fear of God Essentials Knit Pullover Hoodie",
    price: "$490,00",
    availableSize: ["l", "xl", "xxl"],
  },
  {
    id: "i3",
    img: ConverseOW,
    name: "Converse x Off-White Vulcanized",
    price: "$1030,00",
    availableSize: [45, 42, 40],
  },
  {
    id: "i4",
    img: NewBalance,
    name: "New Balance 990v5",
    price: "$240,00",
    availableSize: [45, 44],
  },
  {
    id: "i5",
    img: VlonePopSmoke,
    name: "Vlone x Pop Smoke Tee",
    price: "$100,00",
    availableSize: ["s", "m", "l"],
  },
  {
    id: "i6",
    img: TravisDunks,
    name: "Nike SB Dunk Low Travis Scott",
    price: "$2061,00",
    availableSize: [46, 40, 38],
  },
];

const ItemsList = () => {
  const [selectedItem, setSelectedItem] = useState(false);

  const closeItemModalHandler = () => {
    setSelectedItem(false);
  };

  const list = DUMMY_ITEMS.map((item) => (
    <Item
      name={item.name}
      price={item.price}
      img={item.img}
      key={item.id}
      size={item.availableSize}
      onClick={() => setSelectedItem(item)}
    />
  ));

  return (
    <>
      <section className={styles["items-section"]}>
        <ul className={styles["items-container"]}>{list}</ul>
        {selectedItem && (
          <ItemsModal onClose={closeItemModalHandler} item={selectedItem} />
        )}
      </section>
    </>
  );
};

export default ItemsList;

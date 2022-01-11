import React, { useState, useEffect, useContext } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import ItemsModal from "./ItemsModal";
import ContextApi from "../../context/context-api";

const ItemsList = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [items, setItems] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const { isModalActive, setIsModalActive } = useContext(ContextApi);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchItems = async () => {
      setIsLoading(true);

      const res = await fetch(
        "https://toocozzy-fashion-default-rtdb.europe-west1.firebasedatabase.app/items.json",
        {
          signal: signal,
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong! :(");
      }

      const resData = await res.json();

      const loadedItems = [];

      for (const key in resData) {
        loadedItems.push({
          id: key,
          img: resData[key].img,
          name: resData[key].name,
          price: resData[key].price,
          availableSize: resData[key].sizes,
        });
      }

      setItems(loadedItems);
      setIsLoading(false);
    };

    fetchItems().catch((error) => {
      setHttpError(error.message);
      console.log(error.message);
      setIsLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, []);

  const closeItemModalHandler = () => {
    setSelectedItem(false);
  };

  if (isLoading) {
    return (
      <section className={styles["items-section"]}>
        <p className={styles.loading}>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles["items-section"]}>
        <p className={styles.went_wrong}>{httpError}</p>
      </section>
    );
  }

  const list = items.map((item) => (
    <Item
      name={item.name}
      price={item.price}
      img={item.img}
      key={item.id}
      size={item.availableSize}
      onClick={() => {
        setSelectedItem(item);
        // setIsModalActive(true);
      }}
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

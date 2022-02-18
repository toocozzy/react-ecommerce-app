import React, { useState, useEffect } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import ItemsModal from "./ItemsModal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const ItemsList = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const dispatch = useDispatch();
  const modalIsActive = useSelector((state) => state.ui.modalIsVisible);
  // const isLoading = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchItems = async () => {
      // dispatch(uiActions.toggleLoading(true));
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

    dispatch(uiActions.toggleLoading(false));

    fetchItems().catch((error) => {
      setHttpError(error.message);
      console.log(error.message);
      // dispatch(uiActions.toggleLoading());
      setIsLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, []);

  const toggleModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  if (isLoading) {
    return (
      <section className={styles["items-section"]}>
        <div className={styles.loading}>
          Loading <span className="loading dots2"></span>{" "}
        </div>
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
        toggleModalHandler();
      }}
    />
  ));

  return (
    <>
      <section className={styles["items-section"]}>
        <ul className={styles["items-container"]}>{list}</ul>

        {modalIsActive && <ItemsModal item={selectedItem} />}
      </section>
    </>
  );
};

export default ItemsList;

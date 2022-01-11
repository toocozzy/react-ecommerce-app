import React, { useRef, useContext } from "react";
import Backdrop from "../UI/Backdrop";
import styles from "./ItemsModal.module.css";
import SizePicker from "./SizePicker";
import ContextApi from "../../context/context-api";

const ItemsModal = (props) => {
  const ctx = useContext(ContextApi);
  const { isCartActive, setIsCartActive, setIsModalActive } = ctx;
  const sizeRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredSize = sizeRef.current.value;

    ctx.addItem({
      id: props.item.id,
      name: props.item.name,
      img: props.item.img,
      size: enteredSize,
      price: props.item.price,
    });
  };

  const addItemHandler = () => {
    // setIsCartActive(true);
    // setIsModalActive(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={props.item.img} alt="" />
        </div>
        <h3 className="item-name">{props.item.name}</h3>
        <p>${props.item.price}</p>
      </div>
      <form className={styles["item-modal-form"]} onSubmit={submitHandler}>
        <SizePicker
          labelFor="size"
          labelText="Choose a size"
          availableSize={props.item.availableSize}
          ref={sizeRef}
        />
        <button className={styles["add-btn"]} onClick={addItemHandler}>
          Add to cart
        </button>
        <button className={styles["close-modal-btn"]} onClick={props.onClose}>
          Close
        </button>
      </form>
      <Backdrop />
    </div>
  );
};

export default ItemsModal;

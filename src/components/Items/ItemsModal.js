import React from "react";
import Backdrop from "../UI/Backdrop";
import styles from "./ItemsModal.module.css";
import SizePicker from "./SizePicker";

const ItemsModal = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={props.item.img} alt="" />
        </div>
        <h3 className="item-name">{props.item.name}</h3>
        <p>{props.item.price}</p>
      </div>
      <form className={styles["item-modal-form"]}>
        <SizePicker
          labelFor="size"
          labelText="Choose a size"
          availableSize={props.item.availableSize}
        />
        <button className={styles["add-btn"]}>Add to cart</button>
        <button className={styles["close-modal-btn"]} onClick={props.onClose}>
          Close
        </button>
      </form>
      <Backdrop />
    </div>
  );
};

export default ItemsModal;

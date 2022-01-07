import { useContext } from "react";
import ContextApi from "../../context/context-api";
import styles from "./CartItems.module.css";

const CartItems = () => {
  const ctx = useContext(ContextApi);
  const mappedItems = ctx.items.map((item) => (
    <li className={styles.cart_item}>
      <div className={styles["cart_item__img-container"]}>
        <img className={styles.cart_item__img} src={item.img} alt={item.name} />
      </div>
      <div className={styles["cart_item__detail-container"]}>
        <p className={styles.cart_item__detail}>{item.name}</p>
        <p className={styles.cart_item__detail}>size: {item.size}</p>
        <p className={styles.cart_item__detail}>${item.price}</p>
      </div>
    </li>
  ));

  return <ul className={styles["cart_item-container"]}>{mappedItems}</ul>;
};

export default CartItems;

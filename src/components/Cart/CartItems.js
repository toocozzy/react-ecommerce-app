import styles from "./CartItems.module.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const addedItems = useSelector((state) => state.cart.items);

  const mappedItems = addedItems.map((item) => (
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

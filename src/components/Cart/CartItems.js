import styles from "./CartItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const { name, img, price, size, quantity } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };

  return (
    <li className={styles.cart_item}>
      <div className={styles["cart_item__img-container"]}>
        <img className={styles.cart_item__img} src={img} alt={name} />
      </div>
      <div className={styles["cart_item__detail-container"]}>
        <p className={styles.cart_item__detail}>{name}</p>
        <p className={styles.cart_item__detail}>size: {size.toUpperCase()}</p>
        <p className={styles.cart_item__detail}>${price}</p>
        <div className={styles.actions}>
          <button
            onClick={removeItemHandler}
            className={styles["cart_item__actions-btn"]}
          >
            -
          </button>
          <span>x {quantity}</span>
          <button
            className={styles["cart_item__actions-btn"]}
            onClick={addItemHandler}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;

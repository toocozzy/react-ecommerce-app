import styles from "./CartItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const { name, img, price, size } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item));
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
      </div>

      <div>
        <button
          className={styles["cart_item__remove-btn"]}
          onClick={removeItemHandler}
        >
          <i class="ri-close-line"></i>
        </button>
      </div>
    </li>
  );
};

export default CartItems;

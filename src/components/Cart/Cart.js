import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import Backdrop from "../UI/Backdrop";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import { cartActions } from "../../store/cartSlice";
import { fetchCartData } from "../../store/cart-actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartIsActive = useSelector((state) => state.ui.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const closeCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <>
      <div className={`${styles.cart} ${cartIsActive ? styles.active : ""}`}>
        <header className={styles["cart__header"]}>
          <span className={styles["cart__heading"]}>your cart</span>
        </header>
        <button className={styles["close__cart"]} onClick={closeCartHandler}>
          <i class="ri-close-line"></i>
        </button>
        <main className={styles["cart__main"]}>
          {cartItems.length > 0 ? (
            <CartItems />
          ) : (
            <p className={styles["cart__main-empty"]}>Your cart is empty.</p>
          )}
        </main>
        <footer className={styles["cart__footer"]}>
          {cartItems.length > 0 && (
            <div className={styles.summary}>
              <p className={styles.summary__total_amount}>
                Total: <span>${totalPrice}</span>
              </p>
              <div className={styles.summary__buttons}>
                <Link to="/checkout">
                  <button
                    className={styles["summary__to_checkout_btn"]}
                    onClick={closeCartHandler}
                  >
                    Proceed to checkout
                  </button>
                </Link>
                <button
                  className={styles["summary__continue_btn"]}
                  onClick={closeCartHandler}
                >
                  Continue shopping
                </button>
              </div>
            </div>
          )}
        </footer>
      </div>
      {cartIsActive && <Backdrop onClick={closeCartHandler} />}
    </>
  );
};

export default Cart;

import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Backdrop from "../UI/Backdrop";
import ContextApi from "../../context/context-api";
import CartItems from "./CartItems";

const Cart = (props) => {
  const ctx = useContext(ContextApi);

  const submitCartHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={`${styles.cart} ${props.isActive ? styles.active : ""}`}>
        <header className={styles["cart__header"]}>
          <span className={styles["cart__heading"]}>your cart</span>
        </header>
        <button className={styles["close__cart"]} onClick={props.inactive}>
          <i class="ri-close-line"></i>
        </button>
        <main className={styles["cart__main"]}>
          {ctx.items.length > 0 ? (
            <CartItems />
          ) : (
            <p className={styles["cart__main-empty"]}>Your cart is empty.</p>
          )}
        </main>
        <footer className={styles["cart__footer"]}>
          {ctx.items.length > 0 && (
            <div className={styles.summary}>
              <p className={styles.summary__total_amount}>
                Total: <span>${ctx.totalAmount}</span>
              </p>
              <form
                className={styles.summary__form}
                onSubmit={submitCartHandler}
              >
                <button className={styles["summary__to_checkout_btn"]}>
                  Go to checkout
                </button>
                <button
                  className={styles["summary__continue_btn"]}
                  onClick={props.inactive}
                >
                  Continue shopping
                </button>
              </form>
            </div>
          )}
        </footer>
      </div>
      {props.isActive && <Backdrop onClick={props.inactive} />}
    </>
  );
};

export default Cart;

import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={`${styles.cart} ${props.isActive ? styles.active : ""}`}>
      <header className={styles["cart-header"]}>
        <span className={styles["cart-heading"]}>your cart</span>
      </header>
      <button className={styles["close-cart"]} onClick={props.inactive}>
        <i class="ri-close-line"></i>
      </button>
      <main className={styles["cart-main"]}>
        <div>
          <p>Your cart is empty.</p>
        </div>
      </main>
      <footer className={styles["cart-footer"]}>
        <div className={styles.summary}></div>
      </footer>
    </div>
  );
};

export default Cart;

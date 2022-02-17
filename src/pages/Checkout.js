import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ShippingForm from "../components/Checkout/ShippingForm";
import styles from "./Checkout.module.css";
import CheckoutItems from "../components/Checkout/CheckoutItems";
import Menu from "../components/Menu/Menu";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const dispatch = useDispatch();
  const orderedItems = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://toocozzy-fashion-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          orderedItems,
          clientInfo: userData,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);

    dispatch(cartActions.clearCart());
  };

  const checkoutContent = (
    <>
      <main className={styles.checkout}>
        <p>Checkout</p>
        <div className={styles["checkout-container"]}>
          <div className={styles["checkout__address_details"]}>
            <p className={styles["checkout__details-heading"]}>
              01.Shipping address
            </p>
            <ShippingForm onConfirm={submitOrderHandler} />
          </div>
          <div className={styles["checkout__items_details"]}>
            <p className={styles["checkout__details-heading"]}>
              02.order summary
            </p>
            <div className={styles["checkout__items-container"]}>
              <CheckoutItems />
            </div>
            <p className={styles["checkout__items-total"]}>
              Total: <span>${totalPrice}</span>
            </p>
            <div className={styles["checkout__submit-wrapper"]}></div>
          </div>
        </div>
        <button className={styles.checkout__submit} form="shipping_form">
          place order
        </button>
        <aside>
          <Menu />
        </aside>
      </main>
      <Footer />
    </>
  );

  const submittedOrder = (
    <div className={styles["submitting__order-container"]}>
      <p className={styles.submitting__text}>
        {didSubmit && !isSubmitting
          ? "Successfully submitted your order!"
          : "Submitting..."}
      </p>
      {didSubmit && (
        <Link to="/home">
          <button className={styles.submitting__btn}>Back to shopping</button>
        </Link>
      )}
    </div>
  );

  return (
    <>
      <header>
        <Navbar />
      </header>
      {!isSubmitting && !didSubmit && checkoutContent}
      {isSubmitting && !didSubmit && submittedOrder}
      {!isSubmitting && didSubmit && submittedOrder}
    </>
  );
};

export default Checkout;

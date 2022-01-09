import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ShippingForm from "../components/Checkout/ShippingForm";
import styles from "./Checkout.module.css";

const Checkout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.checkout}>
        <p>Checkout</p>
        <ShippingForm />
      </main>
      <Footer />
    </>
  );
};

export default Checkout;

import React from "react";
import ItemsList from "../components/Items/ItemsList";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";

const Home = () => {
  // const isLoading = useSelector((state) => state.ui.isLoading);
  // console.log(isLoading);

  // if (isLoading) {
  //   return (
  //     <>
  //       <header>
  //         <Navbar />
  //       </header>
  //       <main>
  //         <p className={styles.loading}>
  //           Loading <span className="loading dots2"></span>{" "}
  //         </p>
  //       </main>
  //     </>
  //   );
  // }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ItemsList />
        <aside>
          <Menu />
          <Cart />
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default Home;

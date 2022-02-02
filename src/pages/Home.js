import React from "react";
import ItemsList from "../components/Items/ItemsList";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";

const Home = () => {
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

import React, { useContext } from "react";
import ItemsList from "../components/Items/ItemsList";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import ContextApi from "../context/context-api";

const Home = () => {
  const { isMenuActive, setIsMenuActive } = useContext(ContextApi);
  const { isCartActive, setIsCartActive } = useContext(ContextApi);

  const activeMenuHandler = () => {
    setIsMenuActive(true);
  };

  const inactiveMenuHandler = () => {
    setIsMenuActive(false);
  };

  const activeCartHandler = () => {
    setIsCartActive(true);
  };

  const inactiveCartHandler = () => {
    setIsCartActive(false);
  };

  return (
    <>
      <header>
        <Navbar onShowMenu={activeMenuHandler} onShowCart={activeCartHandler} />
      </header>
      <main>
        <ItemsList />
        <aside>
          <Menu isActive={isMenuActive} inactive={inactiveMenuHandler} />
          <Cart isActive={isCartActive} inactive={inactiveCartHandler} />
        </aside>
      </main>
      <Footer />)
    </>
  );
};

export default Home;

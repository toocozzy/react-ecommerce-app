import React, { useState } from "react";
import ItemsList from "./components/Items/ItemsList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/UI/Menu";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const activeMenuHandler = () => {
    setIsMenuActive(true);
  };

  const inactiveMenuHandler = () => {
    setIsMenuActive(false);
  };

  return (
    <>
      <header>
        <Navbar onShow={activeMenuHandler} />
      </header>
      <main>
        <ItemsList />
        <aside>
          <Menu isActive={isMenuActive} inactive={inactiveMenuHandler} />
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default App;

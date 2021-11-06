import React from "react";

import Navlink from "../UI/Navlink";
import Logo from "../UI/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Navlink>
        <i class="material-icons">apps</i>
      </Navlink>
      <Logo />
      <Navlink>
        <i class="material-icons">shopping_cart</i>
      </Navlink>
    </nav>
  );
};

export default Navbar;

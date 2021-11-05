import React from "react";
import menuIcon from "../../assets/icons/menu.png";
import bagIcon from "../../assets/icons/bag.png";
import Navlink from "../UI/Navlink";
import Logo from "../UI/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Navlink icon={menuIcon} />
      <Logo />
      <Navlink icon={bagIcon} />
    </nav>
  );
};

export default Navbar;

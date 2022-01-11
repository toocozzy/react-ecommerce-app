import React, { useContext } from "react";
import ContextApi from "../../context/context-api";
import Navlink from "../UI/Navlink";
import Logo from "../UI/Logo";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const { items } = useContext(ContextApi);
  return (
    <nav className={styles.nav}>
      <Navlink onClick={props.onShowMenu}>
        <i class="ri-function-line"></i>
      </Navlink>
      <Logo />
      <Navlink onClick={props.onShowCart}>
        <div className={styles.dupa}>
          <i class="ri-shopping-bag-line"></i>
          {items.length > 0 && (
            <span className={styles.nav__counter}>{items.length}</span>
          )}
        </div>
      </Navlink>
    </nav>
  );
};

export default Navbar;

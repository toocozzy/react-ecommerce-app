import React from "react";
import { uiActions } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";

import Navlink from "../UI/Navlink";
import Logo from "../UI/Logo";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const toggleMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };

  return (
    <nav className={styles.nav}>
      <Navlink onClick={toggleMenuHandler}>
        <i class="ri-function-line"></i>
      </Navlink>
      <Logo />
      <Navlink onClick={toggleCartHandler}>
        <div className={styles["nav__btn-wrapper"]}>
          <i class="ri-shopping-bag-line"></i>
          {totalQuantity > 0 && (
            <span className={styles.nav__counter}>{totalQuantity}</span>
          )}
        </div>
      </Navlink>
    </nav>
  );
};

export default Navbar;

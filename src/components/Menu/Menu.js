import React from "react";
import styles from "./Menu.module.css";
import Backdrop from "../UI/Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const Menu = (props) => {
  const dispatch = useDispatch();
  const menuIsActive = useSelector((state) => state.ui.menuIsVisible);

  const closeMenuHandler = () => {
    dispatch(uiActions.toggleMenu());
  };

  return (
    <>
      <div className={`${styles.menu} ${menuIsActive ? styles.active : ""}`}>
        <form>
          <input type="text" placeholder="search" />
          <button>
            <i class="ri-search-line"></i>
          </button>
        </form>
        <button className={styles["close-menu"]} onClick={closeMenuHandler}>
          <i class="ri-close-line"></i>
        </button>
        <ul>
          <li>
            <a href="#">shoes</a>
          </li>
          <li>
            <a href="#">hoodies</a>
          </li>
          <li>
            <a href="#">t-shirts</a>
          </li>
          <li>
            <a href="#">pants</a>
          </li>
          <li>
            <a href="#">jewelery</a>
          </li>
          <li>
            <a href="#">accessories</a>
          </li>
        </ul>
        <button className={styles.logout}>
          <i class="ri-logout-box-line"></i> logout
        </button>
      </div>
      {menuIsActive && <Backdrop onClick={closeMenuHandler} />}
    </>
  );
};

export default Menu;

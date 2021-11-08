import React from "react";
import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={`${styles.menu} ${props.isActive ? styles.active : ""}`}>
      <form>
        <input type="text" placeholder="search" />
        <button>
          <i class="ri-search-line"></i>
        </button>
      </form>
      <button className={styles["close-menu"]} onClick={props.inactive}>
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
  );
};

export default Menu;

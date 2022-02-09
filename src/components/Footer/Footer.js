import React from "react";
import styles from "./Footer.module.css";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <div className={styles.content}>
        <div className={styles["links-wrapper"]}>
          <ul>
            <li>
              <a href="#">payment information</a>
            </li>
            <li>
              <a href="#">refund policy</a>
            </li>
            <li>
              <a href="#">shipping information</a>
            </li>
          </ul>
        </div>
        <div className={styles["links-wrapper"]}>
          <ul>
            <li>
              <a href="#">terms of use</a>
            </li>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">authenticate</a>
            </li>
          </ul>
        </div>

        <div className={styles.branding}>
          <span className={styles.logo}>toocozzy</span>
          <p>&copy; toocozzy. all rights reserved</p>
          <div className={styles["social-container"]}>
            <a href="#">
              <i class="ri-instagram-fill"></i>
            </a>
            <a href="#">
              <i class="ri-facebook-fill"></i>
            </a>

            <a href="#">
              <i class="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

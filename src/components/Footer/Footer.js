import React from "react";
import styles from "./Footer.module.css";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <div className={styles.content}></div>
    </footer>
  );
};

export default Footer;

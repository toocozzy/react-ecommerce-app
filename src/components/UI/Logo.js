import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/home">
        <span>TOOCOZZY</span>
      </Link>
    </div>
  );
};

export default Logo;

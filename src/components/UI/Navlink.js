import React from "react";
import styles from "./Navlink.module.css";

const Navlink = (props) => {
  return (
    <button className={styles.btn}>
      <img src={props.icon} alt="" />
    </button>
  );
};

export default Navlink;

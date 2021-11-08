import React from "react";
import styles from "./Navlink.module.css";

const Navlink = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Navlink;

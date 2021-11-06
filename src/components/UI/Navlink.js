import React from "react";
import styles from "./Navlink.module.css";

const Navlink = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default Navlink;

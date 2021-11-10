import React from "react";
import ReactDOM from "react-dom";
import styles from "./Backdrop.module.css";

const BackdropElement = (props) => {
  return (
    <div className={styles.overlay} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const overlays = document.getElementById("overlays");

const Backdrop = () => {
  return ReactDOM.createPortal(<BackdropElement />, overlays);
};

export default Backdrop;

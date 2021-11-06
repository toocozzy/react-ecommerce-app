import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>TOOCOOZY MAILING LIST</div>
      <form>
        <input type="mail" placeholder="email address" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Newsletter;

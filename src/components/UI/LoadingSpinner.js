import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div>
      <p className={styles.loading}>
        Loading <span className="loading dots2"></span>
      </p>
    </div>
  );
};

export default LoadingSpinner;

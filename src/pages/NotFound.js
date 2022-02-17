import Navbar from "../components/Navbar/Navbar";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className={styles.not_found__wrapper}>
        <h1 className={styles.not_found__heading}>404</h1>
        <p className={styles.not_found__paragraph}>Page not found!</p>
        <Link to="/home">
          <button className={styles.not_found__btn}>Back to home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;

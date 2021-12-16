import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div>
      <div className={styles.preloader_div}>
        <div className={styles.center_div}>
          <div className={styles.rot__3}></div>
          <h1 className={styles.heading_2}>Loading</h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Loading;

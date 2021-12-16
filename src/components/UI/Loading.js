import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div>
      <div className={styles.preloader_div}>
        <div className={styles.center_div}>
          <div className={styles.box}>
            <div className={styles.three}></div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Loading;

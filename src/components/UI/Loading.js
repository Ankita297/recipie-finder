import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div>
      <div class={styles.preloader_div}>
        <div class={styles.center_div}>
          <div class={styles.rot__3}></div>
          <h1 class={styles.heading_2}>Loading</h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Loading;

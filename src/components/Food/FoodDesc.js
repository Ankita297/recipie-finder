import React from "react";
import styles from "./FoodDesc.module.css";
export const FoodDesc = (props) => {



  return (
    <div className={styles.center}>
      <div className={styles.box}>
        <p className={styles.desc}>{props.desc.strMeal}</p>

        <a href={props.desc.strSource} className={styles.button} type="button">
          Blog
        </a>
        <a href={props.desc.strYoutube} target='_b' type="button" className={styles.button}>
          Video
        </a>
      </div>
    </div>
  );
};

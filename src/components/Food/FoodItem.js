import React from "react";
import { FoodDesc } from "./FoodDesc";
import styles from "./FoodItem.module.css";
const FoodItem = (props) => {
  return (
    <div>
      <div className={styles.box}>
        <div className="card">
          <a target="_blank" href={props.food.strSource}>
            <img
              className={styles.img}
              src={props.food.strMealThumb}
              alt={props.strMeal}
            />
          </a>
        </div>
        <FoodDesc desc={props.food} />
        <div className={styles.desc}></div>
      </div>
    </div>
  );
};

export default FoodItem;

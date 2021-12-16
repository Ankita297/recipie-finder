import React, { Fragment } from "react";
import { FoodDesc } from "./FoodDesc";
import styles from "./FoodItem.module.css";
const FoodItem = (props) => {
  return (
    <Fragment>
      <div className={styles.box}>
        <div className="card">
          <a target="_h" href={props.food.strSource}>
            <p>{props.food.idMeal}</p>
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
    </Fragment>
  );
};

export default FoodItem;

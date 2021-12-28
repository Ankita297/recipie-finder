import React, { Fragment } from "react";
import { FoodDesc } from "./FoodDesc";
import styles from "./FoodItem.module.css";
const FoodItem = (props) => {
  const getIdFood = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <div className={styles.box}>
        <div className="card">
          <a target="_h" href={props.food.strSource}>
            <img
              className={styles.img}
              src={props.food.strMealThumb}
              alt={props.strMeal}
            />
          </a>
        </div>
        <FoodDesc desc={props.food} getId={getIdFood} />
      </div>
    </Fragment>
  );
};

export default FoodItem;

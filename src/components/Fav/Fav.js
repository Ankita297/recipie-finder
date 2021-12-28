import React, { useContext } from "react";

import FavContext from "../../store/context";
import FoodItem from "../Food/FoodItem";
import styles from "./Fav.module.css";

const Fav = () => {
  const fav = useContext(FavContext);

  return (
    <div>
      <h1 className={styles.heading}>My favourite recipies</h1>
      <div className={styles.pagination}>
        <div className={styles.box}>
          <div className={styles.content}>
            {fav.recipies != null &&
              fav.recipies.map((x) => {
                return <FoodItem food={x} key={x.idMeal} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;

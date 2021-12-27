import React, { useContext } from "react";
import styles from "./FoodDesc.module.css";
import { BiBookHeart } from "react-icons/bi";
import FavContext from "../../store/context";
export const FoodDesc = (props) => {
  const ctx = useContext(FavContext);

  const idHandler = () => {
    ctx.onAdd(props.desc);
    props.getId(props.desc.idMeal);
  };

  const found = ctx.recipies.find((x) => x.idMeal == props.desc.idMeal);

  return (
    <div className={styles.center}>
      <div className={styles.box}>
        <p className={styles.desc}>{props.desc.strMeal}</p>

        <a href={props.desc.strSource} className={styles.button} type="button">
          Blog
        </a>
        <a
          href={props.desc.strYoutube}
          target="_b"
          type="button"
          className={styles.button}
        >
          Video
        </a>
        <br />

        {found != undefined ? (
          <button
            id={props.desc.idMeal}
            target="_b"
            type="button"
            style={{ backgroundColor: "pink" }}
            onClick={idHandler}
            className={styles.btn}
          >
            <BiBookHeart style={{ color: "red" }} />
          </button>
        ) : (
          <button
            id={props.desc.idMeal}
            target="_b"
            type="button"
            onClick={idHandler}
            style={{ backgroundColor: "white" }}
            className={styles.btn}
          >
            <BiBookHeart style={{ color: "orange" }} />
          </button>
        )}

      </div>
    </div>
  );
};

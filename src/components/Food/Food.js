import React, { useEffect, useState, useRef } from "react";
import Input from "../UI/Input";
import FoodItem from "./FoodItem";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import styles from "./Food.module.css";
import { Fragment } from "react";
import useHttp from "../../hooks/useHttp";
import Category from "../Category/Category";
const Food = () => {
  const [isInput, setIsInput] = useState("");
  const [recipies, setRecipie] = useState([]);
  const [category, setCategory] = useState();

  const InputRef = useRef("");

  const { isLoading, error, sendRequest: loadData } = useHttp();

  useEffect(() => {
    const recipiesGet = (data) => {
      setRecipie(data.meals);
    };

    const timer = setTimeout(() => {
      loadData(
        {
          url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${
            isInput || "egg"
          } `,
        },
        recipiesGet
      );
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isInput]);

  useEffect(() => {
    const categoryGet = (data) => {
      setRecipie(data.meals);
    };

    const timer = setTimeout(() => {
      loadData(
        {
          url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
            category || "beef"
          }`,
        },
        categoryGet
      );
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [loadData, category]);

  const categoryHandler = (val) => {
    setCategory(val);
  };

  const InputHandler = (event) => {
    setIsInput(event.target.value);
  };

  let content = <Error />;
  if (recipies == null) {
    content = <Error />;
  } else if (recipies.length > 0) {
    content = (
      <div className={styles.box}>
        <div className={styles.content}>
          {recipies.map((x) => {
            return <FoodItem key={x.idMeal} food={x} />;
          })}
        </div>
      </div>
    );
  }

  if (isLoading) {
    content = <Loading />;
  }

  return (
    <Fragment>
      <Input
        onChange={InputHandler}
        type="text"
        placeholder="Enter the ingredient or Recipie name"
        ref={InputRef}
      />
      <Category onChoose={categoryHandler} />

      {content}
    </Fragment>
  );
};

export default Food;

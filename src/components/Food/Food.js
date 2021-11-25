import React, { useEffect, useState, useRef } from "react";
import Input from "../UI/Input";
import FoodItem from "./FoodItem";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import styles from "./Food.module.css";
import { Fragment } from "react";
import Category from "../Category/Category";

const Food = () => {
  const [isInput, setIsInput] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [recipies, setRecipie] = useState([]);
  const InputRef = useRef("");
  const [category, setCategory] = useState();
  const api_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${
    isInput || "egg"
  } `;

  const api_url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
    category || "seafood"
  }`;

  const loadData = async () => {
    const response = await fetch(api_URL);
    if (!response.ok) {
      throw new Error("Something went wrong ");
    }
    const data = await response.json();
    InputRef.current.value = "";
    setRecipie(data.meals);
    console.log(data.meals);
    setIsloading(false);
  };

  const loadData2 = async () => {
    const response = await fetch(api_url2);
    console.log(api_url2);

    const data = await response.json();

    setRecipie(data.meals);
    console.log(data.meals);
    setIsloading(false);
  };

  useEffect(() => {
    loadData2();

    console.log("fgf hgg");
  }, [category]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isInput]);

  const InputHandler = (event) => {
    setIsloading(true);
    setIsInput(event.target.value);
    console.log(event.target.value);
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

  const categoryHandler = (val) => {
    setCategory(val);
    console.log(val);
  };
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

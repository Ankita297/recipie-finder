import React, { useEffect, useState, useRef } from "react";
import Input from "../UI/Input";
import FoodItem from "./FoodItem";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import styles from "./Food.module.css";
import { Fragment } from "react";
import useHttp from "../../hooks/useHttp";
import Category from "../Category/Category";
import Pagination from "../Paginate/Paginate"
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

  let content = "";
   if (isLoading) {
    content = <Loading />;
  }

  else if(error) content=<Error/>
  return (
    <Fragment>
      <Input
        onChange={InputHandler}
        type="text"
        placeholder="Enter the ingredient or Recipie name"
        ref={InputRef}
      />
      
      <Category  onChoose={categoryHandler} />
      {content}

      {!isLoading && recipies.length > 0 ? (
        <>
          <Pagination
            data={recipies}
            RenderComponent={FoodItem}
            title="Posts"
            pageLimit={3}
            dataLimit={3}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}

    </Fragment>
  );
};

export default Food;

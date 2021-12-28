import React, { useEffect, useState, useRef, Fragment } from "react";
import Input from "../UI/Input";
import FoodItem from "./FoodItem";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import useHttp from "../../hooks/useHttp";
import Category from "../Category/Category";
import Pagination from "../Paginate/Paginate";
let dataRecipie = [];

const Food = (props) => {
  const [isInput, setIsInput] = useState("");
  const [recipies, setRecipie] = useState([]);
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const InputRef = useRef("");

  const { error, sendRequest: loadData } = useHttp();

  useEffect(() => {
    setIsLoading(true);
    const recipiesGet = (data) => {
      setRecipie(data.meals);
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      loadData(
        {
          url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${isInput} `,
        },
        recipiesGet
      );
      InputRef.current.value = "";
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isInput, loadData]);

  useEffect(() => {
    setIsLoading(true);
    const categoryGet = (data) => {
      const getData = (data) => {
        dataRecipie.push(data.meals[0]);
      };

      data.meals.map((x) => {
        return loadData(
          {
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x.idMeal}`,
          },
          getData
        );
      });

      setTimeout(() => {
        setRecipie(dataRecipie);
        setIsLoading(false);
      }, 2000);
    };

    loadData(
      {
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
          category || "Beef"
        }`,
      },
      categoryGet
    );
  }, [category, loadData]);

  const categoryHandler = (val) => {
    dataRecipie = [];
    setCategory(val);
  };

  const InputHandler = (event) => {
    setIsInput(event.target.value);
  };

  let content = <Loading />;
  if (isLoading && !error) {
    content = (
      <div>
        <Loading />
      </div>
    );
  } else if (error) content = <Error />;
  else if (!isLoading && recipies == null) {
    content = <Error />;
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

      {!isLoading && error == null && recipies != null ? (
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
        content
      )}
    </Fragment>
  );
};

export default Food;

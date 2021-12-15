import React, { useEffect, useState, useRef } from "react";
import Input from "../UI/Input";
import FoodItem from "./FoodItem";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { Fragment } from "react";
import useHttp from "../../hooks/useHttp";
import Category from "../Category/Category";
import Pagination from "../Paginate/Paginate";
const Food = () => {
  const [isInput, setIsInput] = useState("");
  const [recipies, setRecipie] = useState([]);
  const [category, setCategory] = useState();
  const [isLoading,setIsLoading] =useState(false);

  const InputRef = useRef("");

  const { error, sendRequest: loadData } = useHttp();



  useEffect(() => {
   setIsLoading(true);
    const recipiesGet = (data) => {
      setRecipie(data.meals);
      console.log(data.meals);
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
      InputRef.current.value = "";
    }, 1500);
    setIsLoading(false);

    return () => {
      clearTimeout(timer);
    };
  }, [isInput, loadData]);

  let dataRecipie = [];

  useEffect(() => {
      setIsLoading(true)
    const categoryGet = (data) => {
      const getData = (data) => {
        console.log(data.meals);
        dataRecipie.push(data.meals[0]);
      };

      data.meals.map((x) => {
        loadData(
          {
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x.idMeal}`,
          },
          getData
        );
      });

      setRecipie(dataRecipie);
      setIsLoading(false)
    };

    loadData(
      {
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
          category || "Goat"
        }`,
      },
      categoryGet
    );
  }, [category]);

  const categoryHandler = (val) => {
    console.log(val);
    setCategory(val);
  };

  const InputHandler = (event) => {
    setIsInput(event.target.value);
  };

  let content = "";
  if (isLoading && !error) {
    content = (
      <div>
        {" "}
        ghdg g<Loading />{" "}
      </div>
    );
  } else if (error) content = <Error />;
  else if (recipies == null) {
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
          {recipies.map((x) => (
            <p> {console.log(x)}</p>
          ))}
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

import React, { useEffect, useState } from "react";

const Food = () => {
  const [isInput, setIsInput] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [recipies, setRecipie] = useState([]);

  const api_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${
    isInput || "egg"
  } `;

  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isInput]);

  const loadData = async () => {
    const response = await fetch(api_URL);
    if (!response.ok) {
      throw new Error("Something went wrong ");
    }
    const data = await response.json();
    setRecipie(data.meals);
    setIsloading(false);
  };

  const InputHandler = (event) => {
    setIsloading(true);
    setIsInput(event.target.value);
  };

  let content = <p>No recipies are there </p>;
  if (recipies == null) {
    content = <p>No recipies are there </p>;
  } else if (recipies.length > 0) {
    content = recipies.map((x) => {
      return <li>{x.strMeal}</li>;
    });
  }

  if (isLoading) {
    content = <p>isLoading....</p>;
  }
  return (
    <div>
      <input onChange={InputHandler} />
      {content}
    </div>
  );
};

export default Food;

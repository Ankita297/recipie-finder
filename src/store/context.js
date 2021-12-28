import React from "react";
import { useEffect, useState } from "react";

const FavContext = React.createContext({
  recipies: [],
  onAdd: () => {},
});

export const FavContextProvider = (props) => {
  const [recipie, setRecipie] = useState([]);

  useEffect(() => {
    let list = [];
    const getArr = JSON.parse(localStorage.getItem("recipie") || "0");

    for (var i = 0; i < getArr.length; i++) {
      let x = getArr[i];
      list[i] = JSON.parse(localStorage.getItem("recipie" + [x]) || "0");
    }

    if (getArr !== 0) {
      setRecipie([...getArr]);
    }
  }, []);

  const addHandler = (id) => {
    let arr = recipie;
  
    const found = arr.find((x) => x.idMeal === id.idMeal);

    if (found !== undefined) {
      console.log(found);
      arr = arr.filter((x) => x.idMeal !== id.idMeal);

      setRecipie([...arr]);
      localStorage.removeItem("recipie");

      localStorage.setItem("recipie", JSON.stringify(recipie));
      console.log(recipie);
    } else {
      console.log(id);

      arr.push(id);
      setRecipie([...arr]);
      localStorage.removeItem("recipie");

      localStorage.setItem("recipie", JSON.stringify(recipie));
      console.log(recipie);
    }
  };

  return (
    <FavContext.Provider
      value={{
        recipies: recipie,
        onAdd: addHandler,
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContext;

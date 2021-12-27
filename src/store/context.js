import React, { createContext, Provider } from "react";
import { useEffect, useState } from "react/cjs/react.development";

const FavContext = React.createContext({
  recipies: [],
  onAdd: () => {},
  onRemove: () => {},
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

    console.log(getArr);
    if (getArr != 0) {
      setRecipie([...getArr]);
    }
  }, []);

  //     const addHandler = (id) => {

  //         let arr=recipie;

  // if(arr.includes(id)){
  //     let new_arr=arr.filter(x=>{
  //      return    x.idMeal!=id.idMeal;
  //     })

  //     setRecipie([...new_arr]);

  //     localStorage.removeItem('recipie') ;

  //     localStorage.setItem('recipie',JSON.stringify(recipie))
  //     console.log(recipie)

  // }
  // else{
  //     arr.push(id);
  //     setRecipie([...arr]);

  //     localStorage.removeItem('recipie') ;

  //     localStorage.setItem('recipie',JSON.stringify(recipie))
  //     console.log(recipie)

  // }

  //     }

  const addHandler = (id) => {
    let arr = recipie;
    console.log(recipie);
    const found = arr.find((x) => x.idMeal == id.idMeal);

    if (found != undefined) {
      console.log(found);
      arr = arr.filter((x) => x.idMeal != id.idMeal);

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

  const removeHandler = (id) => {
    console.log(id);
    let items = JSON.parse(localStorage.getItem("recipie"));
    recipie = items.filter((x) => {
      return x.id != id;
    });

    localStorage.removeItem("recipie");
    localStorage.setItem("recipie".JSON.stringfy(recipie));
    setRecipie(recipie);
  };
  return (
    <FavContext.Provider
      value={{
        recipies: recipie,
        onAdd: addHandler,
        onRemove: removeHandler,
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContext;

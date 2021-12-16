import React,{ useState, useEffect } from "react";
import styles from "./Category.module.css";
import useHttp from "../../hooks/useHttp";
const Category = (props) => {
  const [category, setCategory] = useState();

  const { sendRequest: loadData } = useHttp();

  useEffect(() => {
    const categoryList = (data) => {
      setCategory(data.meals);
    };

    loadData(
      {
        url: "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
      },
      categoryList
    );
  }, [loadData]);

  const categoryHandler = (val) => {
    props.onChoose(val);
  };
  const dropdownChangeHandler = (event) => {
    categoryHandler(event.target.value);
  };

  let content = "";
  if (category == null) {
    content = "";
  } else if (category != null) {
    content = (
      <div className={styles.expenses_filter}>
        <div className={styles.control}>
          <label className={styles.label}>Filter by Category</label>
          &nbsp; &nbsp;
          <select onChange={dropdownChangeHandler}>
            {category.map((x) => {
              return (
                <option key={x.strCategory} value={x.strCategory}>
                  {x.strCategory}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Category;

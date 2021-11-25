import React from "react";
import Category from "../Category/Category";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>RECIPIE FINDER</h1>
      </header>
    </main>
  );
};

export default Header;

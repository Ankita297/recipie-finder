import React from "react";
import styles from "./Header.module.css";

import logo from "../../logo.svg"
const Header = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1> <img src={logo} alt="logo"/> RECIPIE FINDER</h1>
      </header>
    </main>
  );
};

export default Header;

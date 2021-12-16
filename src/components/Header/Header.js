import React from "react";
import styles from "./Header.module.css";
import ReactLogo from "../../wave (2).svg"
const Header = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>RECIPIE FINDER</h1>
        <img  style={{marginTop:'-10%'}} src={ReactLogo} alt="React Logo" />
      </header>
    </main>
  );
};

export default Header;

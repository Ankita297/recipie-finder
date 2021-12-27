import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import logo from "../../logo.svg"
const Header = () => {
  return (
      <header className={styles.header}>
        <Link to="/" > <img src={logo} alt="logo"/> RECIPIE FINDER</Link>
        <Link to= "/fav" className={styles.fav}> Fav paage</Link>
        
      </header>



      
  );
};

export default Header;

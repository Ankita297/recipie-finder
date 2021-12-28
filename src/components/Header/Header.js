import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <MdFastfood className={styles.foodIcon} /> Recipie finder
      </Link>
      <Link to="/fav" className={styles.fav}>
        <AiTwotoneHeart className={styles.favIcon} />
      </Link>
    </header>
  );
};

export default Header;

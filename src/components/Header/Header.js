import React from "react";
import styles from "./Header.module.css";
import ReactLogo from "../../wave.svg"
const Header = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>RECIPIE FINDER</h1>
        <img src={ReactLogo} alt="React Logo" />

        {/* <svg style={{marginTop:'-15%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.45" d="M0,64L720,160L1440,64L1440,320L500,320L0,320Z"></path></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-10%'}} viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.45" d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      </header>
    </main>
  );
};

export default Header;

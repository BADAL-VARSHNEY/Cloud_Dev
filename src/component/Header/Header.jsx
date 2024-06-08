import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const { setCursorVariant } = props;
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <header className={styles.header}>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="">
          Cloud_Dev
        </h1>
        <nav className={styles.nav__container}>
          <ul className={styles.nav__list}>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Home
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              About
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Blogs
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Contect
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Github
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import styles from "./Home.module.css";

const Home = (props) => {
  const { setCursorVariant } = props;

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div className={styles.home__container}>
        <div className={styles.home_content}>
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
            Home Page
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;

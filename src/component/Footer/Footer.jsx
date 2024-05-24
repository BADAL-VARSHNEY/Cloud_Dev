import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_content}></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

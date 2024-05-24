import React, { useEffect, useRef, useState } from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import { motion } from "framer-motion";


const Layout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#fff",
      mixBlendMode: "difference"
    }
  };


  return (
    <>
      <Header setCursorVariant={setCursorVariant} />
      <Home  setCursorVariant={setCursorVariant} />
      <Footer />
      <motion.div
        className="custom_cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Layout;

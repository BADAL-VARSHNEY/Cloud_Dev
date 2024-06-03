import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const Layout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseMove = useCallback(
    throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const i = document.createElement("i");
      i.style.left = e.pageX + "px";
      i.style.top = e.pageY + "px";
      i.style.transform = `scale(${Math.random() * 2 + 1})`;
      i.style.setProperty("--x", getRandomTransitionValue());
      i.style.setProperty("--y", getRandomTransitionValue());
      document.body.appendChild(i);
      setTimeout(() => {
        document.body.removeChild(i);
      }, 2000);
    }, 0),
    []
  );

  const getRandomTransitionValue = () => {
    return `${Math.random() * 400 - 200}px`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]);

  return (
    <>
      <Header setCursorVariant={setCursorVariant} />
      <Home setCursorVariant={setCursorVariant} />
      <Footer />
      <div
        className={`custom_cursor ${cursorVariant}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
    </>
  );
};

export default Layout;

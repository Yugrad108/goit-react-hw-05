import { useEffect, useState } from "react";
import styles from "./ScrollTopBtn.module.css";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollTopBtn = () => {
  const [visible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`${styles.scrollTopBtn} ${visible ? styles.visible : ""}`}
    >
      <FaAnglesUp />
    </button>
  );
};

export default ScrollTopBtn;

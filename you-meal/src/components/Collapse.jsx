import React from "react";
import styles from "../assets/styles/components/collapse.module.css";
function Collapse({  onClose }) {
  
  return (
    <button className={styles["collapse"]} onClick={onClose}>
     Свернуть
    </button>
  );
}

export default Collapse;

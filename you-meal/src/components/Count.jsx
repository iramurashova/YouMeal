import React, { useState } from "react";
import styles from "../assets/styles/components/count.module.css";
function Count({ value }) {
  const increase = () => {};
  const decrease = () => {};
  return (
    <div className={styles.container}>
      <button onClick={decrease} className={styles.change}>
        -
      </button>
      <div className={styles.count}>{value}</div>
      <button onClick={increase} className={styles.change}>
        +
      </button>
    </div>
  );
}

export default Count;

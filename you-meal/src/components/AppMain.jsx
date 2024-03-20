import React, { useState } from "react";
import Cart from "./Cart";
import Cards from "./Cards";
import styles from "../assets/styles/components/appMain.module.css";
function AppMain() {
  return (
    <main className={styles["contain"]}>
      <Cart />
      <section className={styles["paragraphs"]} aria-label="Разделы с едой">
        <Cards />
      </section>
    </main>
  );
}

export default AppMain;

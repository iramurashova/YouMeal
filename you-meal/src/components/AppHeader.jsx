import React from "react";
import Navigation from "./Navigation";
import styles from "../assets/styles/components/appHeader.module.css";
import images from "../assets/images/Images";

function AppHeader() {
  return (
    <header className={styles["header"]}>
      <figure className={styles["header__logo-container"]}>
        <img
          src={images.headerLogo}
          alt="Логотип компании"
          className={styles["header__logo"]}
        />
        <img
          src={images.headerIcon}
          alt="иконка"
          className={styles["header__logo-icon"]}
        />
      </figure>
      <div className={styles["header__container"]}>
        <h1 className={styles["header__title"]}>
          Только самые сочные бургеры!
        </h1>
        <p className={styles["header__subtitle"]}>
          Бесплатная доставка от 599₽
        </p>

        <img
          className={styles["header__image"]}
          src={images.burgerSmall}
          srcSet={`${images.burgerBig} 800w`}
          alt="Бургер иконка"
        />
      </div>
      <Navigation />
    </header>
  );
}

export default AppHeader;

import Navigation from "./Navigation";
import styles from "../assets/styles/components/appHeader.module.css";
import images from "../assets/images/Images";

function AppHeader() {
  return (
    <header className={styles.header}>
      <figure className={styles.logo_container}>
        <img
          src={images.headerLogo}
          alt="Логотип компании"
          className={styles.logo}
        />
        <img
          src={images.headerIcon}
          alt="иконка"
          className={styles.logo_icon}
        />
      </figure>
      <div className={styles.container}>
        <h1 className={styles.title}>Только самые сочные бургеры!</h1>
        <p className={styles.subtitle}>Бесплатная доставка от 599₽</p>

        <img
          className={styles.image}
          src={images.burgerSmall}
          srcSet={`${images.burgerBig} 800w`}
          alt="Бургер иконка"
        />
      </div>
  
    </header>
  );
}

export default AppHeader;

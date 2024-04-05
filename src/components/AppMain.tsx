import Cart from "./Cart";
import Cards from "./Cards";
import styles from "../assets/styles/components/appMain.module.css";
import Navigation from "./Navigation";
function AppMain() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.contain}>
        <Cart />
        <section className={styles.paragraphs} aria-label="Разделы с едой">
          <Cards />
        </section>
      </div>
    </main>
  );
}

export default AppMain;

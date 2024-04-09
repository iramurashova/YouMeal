import styles from "../assets/styles/components/card.module.css";
import AddProductButton from "./AddProductButton";

import IMAGES from "../assets/images/Images";


function EmptyCard() {


  return  (
    <>
      <li className={styles.card}>
        <img
          src={IMAGES.burgerSmall}
          alt="пустая"
          className={styles.image}
       
        />
        <p className={styles.price}>0₽</p>
        <h3 className={styles.title}></h3>
        <p className={styles.weight}>0г</p>
      </li>
    </>
  ) 
}

export default EmptyCard;

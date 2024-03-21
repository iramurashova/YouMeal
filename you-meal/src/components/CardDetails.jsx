import React from "react";
import { useSelector } from "react-redux";
import styles from "../assets/styles/components/cardDetails.module.css";
import Button from "./Button";
import Count from "./Count";
import AddProductButton from "./AddProductButton";
import { selectItem } from "../services/dataReducer/selector";

function CardDetails() {
  const item = useSelector(selectItem)
  return (
    <div className={styles.product}>
      <img src={item.link} alt={item.name} className={styles.image} />

      <h2 className={styles.title}>{item.name}</h2>
      <p className={styles.price}>{`${item.price}₽`}</p>
      <div className={styles.button}>
      <AddProductButton item={item}/>
      </div>

      <div className={styles.count_container}>
        <Count item={item}/>
      </div>

      <p className={styles.description}>{item.description}</p>
      <ul className={styles.contain}>
        <li>
          <span className={styles.contain_title}>Состав:</span>
        </li>
        {item.ingredients.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
        <li
          className={styles.weight}
        >{`${item.weight}г ккал ${item.calories}`}</li>
      </ul>
    </div>
  );
}

export default CardDetails;

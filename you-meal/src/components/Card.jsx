import React from "react";
import Button from "./Button";
import styles from "../assets/styles/components/card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getItemData } from "../services/dataReducer/dataReducer";
import { openModal } from "../services/modalReducer/modalReducer";
import { addItem } from "../services/cartReducer/cartReducer";
import { selectCartList, selectCounter } from "../services/cartReducer/selector";
function Card({ item }) {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const cartList = useSelector(selectCartList);
  const onOpen = () => {
    dispatch(getItemData(item));
    dispatch(openModal("item"));
  };
  const onClick = () => {
    console.log("click")
    const newItemIndex = cartList.findIndex((el) => el.name === item.name);
    
    if (newItemIndex !== -1) {
      const updatedCartList = cartList.map((el, index) => 
        index === newItemIndex ? { ...el, count: el.count + 1 } : el
      );
      
      dispatch(addItem(updatedCartList));
    } else {
      const newItem = { ...item, count: 1 };
      dispatch(addItem([...cartList, newItem]));
    }
  };
  return (
    <li className={styles["card"]}>
      <img
        src={item.link}
        alt={item.name}
        className={styles["image"]}
        onClick={onOpen}
      />
      <p className={styles["price"]}>{`${item.price}₽`}</p>
      <h3 className={styles["title"]}>{item.name}</h3>
      <p className={styles["weight"]}>{`${item.weight}г`}</p>
      <Button className={styles["button"]} text="Добавить" onClick={onClick} />
    </li>
  );
}

export default Card;

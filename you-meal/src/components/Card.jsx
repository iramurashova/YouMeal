import React from 'react'
import Button from './Button'
import styles from '../assets/styles/components/card.module.css'
import { useDispatch } from 'react-redux';
import { getItemData } from '../services/dataReducer/dataReducer';
import { openModal } from '../services/modalReducer/modalReducer';
function Card({item}) {
    const dispatch = useDispatch();
    const onOpen = () => {
        dispatch(getItemData(item));
        dispatch(openModal("item"));
      };
  return (
    <li className={styles["card"]} >
    <img
      src={item.link}
      alt={item.name}
      className={styles["image"]}
      onClick={onOpen}
    />
    <p className={styles["price"]}>{`${item.price}₽`}</p>
    <h3 className={styles["title"]}>{item.name}</h3>
    <p className={styles["weight"]}>{`${item.weight}г`}</p>
    <Button className={styles["button"]} text = "Добавить"/>
  </li>
  )
}

export default Card
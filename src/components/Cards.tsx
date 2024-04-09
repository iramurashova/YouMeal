import React from "react";
import { foodData } from "../assets/data/foodData";
import styles from "../assets/styles/components/cards.module.css";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Modal from "./Modal";
import {
  selectModalOpen,
  selectTypeOfModal,
} from "../services/modalReducer/selector";
import { closeModal } from "../services/modalReducer/modalReducer";
import { removeItemData } from "../services/dataReducer/dataReducer";
import { useAppDispatch, useAppSelector } from "../services/types";
import EmptyCard from "./EmptyCard";
import { editCartList } from "../services/cartReducer/cartReducer";
import Order from "./Order";
function Cards() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectModalOpen);
  const typeOfModal = useAppSelector(selectTypeOfModal);
  const onCloseDetails = () => {
    dispatch(closeModal());
    dispatch(removeItemData());
  };
  const onCloseOrder = () => {
    dispatch(editCartList([]));
    dispatch(closeModal());
  };

  return (
    <>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="burgers">
          Бургеры
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "burgers" && <Card key={item._id} item={item} />
          )}
        </ul>
      </article>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="appetizer">
          Закуски
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "apetizer" && <Card key={item._id} item={item} />
          )}
        </ul>
      </article>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="hotdogs">
          Хот-доги
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "hotdogs" && <Card key={item._id} item={item} />
          )}
        </ul>
      </article>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="combo">
          Комбо
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "combo" && <Card key={item._id} item={item} />
          )}
          {!foodData.some((item) => item.type === "combo") && <EmptyCard />}
        </ul>
      </article>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="burrito">
          Шаурма
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "burrito" && <Card key={item._id} item={item} />
          )}
          {!foodData.some((item) => item.type === "burrito") && <EmptyCard />}
        </ul>
      </article>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="pizza">
          Пицца
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "pizza" && <Card key={item._id} item={item} />
          )}
          {!foodData.some((item) => item.type === "pizza") && <EmptyCard />}
        </ul>
      </article>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="desserts">
          Десерты
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "desserts" && <Card key={item._id} item={item} />
          )}
          {!foodData.some((item) => item.type === "desserts") && <EmptyCard />}
        </ul>
      </article>
      <article className={styles.cards}>
        <h2 className={styles.heading} id="sauses">
          Соусы
        </h2>
        <ul className={styles.list}>
          {foodData.map(
            (item) =>
              item.type === "sauses" && <Card key={item._id} item={item} />
          )}
          {!foodData.some((item) => item.type === "sauses") && <EmptyCard />}
        </ul>
      </article>
      {isOpen && typeOfModal === "item" && (
        <Modal onClose={onCloseDetails}>
          <CardDetails />
        </Modal>
      )}
      {typeOfModal === "order" && isOpen && (
        <Modal onClose={onCloseOrder}>
          <Order />
        </Modal>
      )}
    </>
  );
}

export default Cards;

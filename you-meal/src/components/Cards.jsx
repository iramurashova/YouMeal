import React from "react";
import { foodData } from "../assets/data/foodData";
import styles from "../assets/styles/components/cards.module.css";
import Card from "./Card";
import CardDetails from "./CardDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectModalOpen, selectTypeOfModal } from "../services/modalReducer/selector";
import Modal from "./Modal";
import { removeItemData } from "../services/dataReducer/dataReducer";
import { closeModal } from "../services/modalReducer/modalReducer";
function Cards({ onOpen }) {
  const isOpen = useSelector(selectModalOpen);
  const typeOfModal = useSelector(selectTypeOfModal);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
    dispatch(removeItemData());
  };
  return (
    <>
      <article className={styles["cards"]}>
        <h2 className={styles["heading"]}>Бургеры</h2>
        <ul className={styles["list"]}>
          {foodData.map(
            (item) =>
              item.type === "burgers" && (
                <Card key={item._id} item={item} onOpen={onOpen} />
              )
          )}
        </ul>
      </article>
      <article className={styles["cards"]}>
        <h2 className={styles["heading"]}>Закуски</h2>
        <ul className={styles["list"]}>
          {foodData.map(
            (item) =>
              item.type === "apetizer" && (
                <Card key={item._id} item={item} onOpen={onOpen} />
              )
          )}
        </ul>
      </article>
      <article className={styles["cards"]}>
        <h2 className={styles["heading"]}>Хот-доги</h2>
        <ul className={styles["list"]}>
          {foodData.map(
            (item) =>
              item.type === "hotdogs" && (
                <Card key={item._id} item={item} onOpen={onOpen} />
              )
          )}
        </ul>
      </article>
      {isOpen && typeOfModal === "item" && (
        <Modal onClose={onClose}>
          <CardDetails />
        </Modal>
      )}
    </>
  );
}

export default Cards;

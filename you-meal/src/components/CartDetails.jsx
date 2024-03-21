import React from "react";
import IMAGES from "../assets/images/Images";
import CartItem from "./CartItem";
import styles from "../assets/styles/components/cartDetails.module.css";
import Button from "./Button";
import Collapse from "./Collapse";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalOpen,
  selectTypeOfModal,
} from "../services/modalReducer/selector";
import { closeModal, openModal } from "../services/modalReducer/modalReducer";
import Modal from "./Modal";
import Delivery from "./Delivery";
import { selectCartList, selectCounter } from "../services/cartReducer/selector";

function CartDetails({ isEmpty, onClose }) {
  const cartList = useSelector(selectCartList);
  const counter = useSelector(selectCounter);
  const total = cartList.reduce((acc, el) => acc + el.price * el.count, 0);
  const formIsOpen = useSelector(selectModalOpen);
  const typeOfModal = useSelector(selectTypeOfModal);
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("open");
    dispatch(openModal("delivery"));
  };
  const handleClose = () => {
    dispatch(closeModal());
    onClose();
  };
  return (
    <>
      <div className={styles["full_container"]}>
        <h2 className={styles.heading}>Корзина</h2>
        <div className={styles.count}>{counter}</div>

        {isEmpty && (
          <p className={styles["full_cart_empty"]}>Тут пока пусто :(</p>
        )}

        <Collapse onClose={onClose} />
        {!isEmpty && (
          <>
            <ul className={styles.list}>
               {cartList.map(item => <CartItem key={item._id} item={item}/>)} 
              </ul>
            <div className={styles["summary"]}>
              <p className={styles["summary_heading"]}>Итого</p>
              <p className={styles["summary_count"]}>{total}₽</p>
            </div>
            <Button type="button" text="Оформить заказ" onClick={handleClick} />
            <div className={styles["footer"]}>
              <p className={styles["special"]}>
                <img src={IMAGES.cartIcon} alt="доставка" className="icon" />
                Бесплатная доставка
              </p>
            </div>
          </>
        )}
      </div>
      {formIsOpen && typeOfModal === "delivery" && (
        <Modal onClose={handleClose}>
          <Delivery />
        </Modal>
      )}
    </>
  );
}

export default CartDetails;

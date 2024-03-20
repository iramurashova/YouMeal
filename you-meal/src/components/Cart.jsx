import React, { useState } from "react";
import IMAGES from "../assets/images/Images";
import styles from "../assets/styles/components/cart.module.css";

import Button from "./Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { selectModalOpen, selectTypeOfModal } from "../services/modalReducer/selector";
import CartDetails from "./CartDetails";
import Delivery from "./Delivery";
import { closeModal, openModal } from "../services/modalReducer/modalReducer";
import Modal from "./Modal";
import { selectCartList, selectCounter } from "../services/cartReducer/selector";

function Cart() {
 
  const cartList = useSelector(selectCartList);
  const counter = useSelector(selectCounter);
  const total = cartList.reduce((acc, el) => acc + el.price * el.count, 0);
  const isEmpty = cartList.length === 0;
  const [isOpen, setIsOpen] = useState(false);
const formIsOpen = useSelector(selectModalOpen);
const typeOfModal = useSelector(selectTypeOfModal);
const dispatch = useDispatch();
  const onOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    console.log("open");
    dispatch(openModal("delivery"));
  }
  const handleClose = () => {
    dispatch(closeModal())
  };
  return (
    <>
      <aside className={styles.cart} onClick={onOpen}>
        <div className={styles.first_line}>
          <h2 className={styles.heading}>Корзина</h2>
          <div className={styles.count}>{counter}</div>
        </div>
        <div className={styles.details}>
          {isEmpty && <p className={styles.cart_empty}>Тут пока пусто :(</p>}
          {!isEmpty && (
            <>
              <ul className={styles.list}>
               {cartList.map(item => <CartItem key={item.name} item={item}/>)} 
              </ul>
              <div className={styles["summary"]}>
                <p className={styles["summary_heading"]}>Итого</p>
                <p className={styles["summary_count"]}>{total}₽</p>
              </div>
              <Button type="button" text="Оформить заказ" onClick={handleClick} />
              <div className={styles.footer}>
                <p className={styles.special}>
                  <img src={IMAGES.cartIcon} alt="доставка" className="icon" />
                  Бесплатная доставка
                </p>
              </div>
            </>
          )}
        </div>
      </aside>
      {isOpen && <CartDetails isEmpty={isEmpty} onClose={onClose} />}
      {formIsOpen && typeOfModal === "delivery" && (
        <Modal onClose={handleClose}>
          <Delivery />
        </Modal>
      )}
    </>
  );
}

export default Cart;

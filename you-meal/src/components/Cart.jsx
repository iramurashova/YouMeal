import React, { useState } from "react";
import styles from "../assets/styles/components/cart.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectModalOpen,
  selectTypeOfModal,
} from "../services/modalReducer/selector";
import CartDetails from "./CartDetails";
import Delivery from "./Delivery";
import { closeModal } from "../services/modalReducer/modalReducer";
import Modal from "./Modal";
import {
  selectCartList,
  selectCounter,
} from "../services/cartReducer/selector";
import CartContainer from "./CartContainer";

function Cart() {
  const cartList = useSelector(selectCartList);
  const counter = useSelector(selectCounter);
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

  const handleClose = () => {
    dispatch(closeModal());
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
          {!isEmpty && <CartContainer />}
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

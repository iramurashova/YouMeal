import React from "react";
import styles from "../assets/styles/components/cartDetails.module.css";
import Collapse from "./Collapse";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalOpen,
  selectTypeOfModal,
} from "../services/modalReducer/selector";
import { closeModal } from "../services/modalReducer/modalReducer";
import Modal from "./Modal";
import Delivery from "./Delivery";
import { selectCounter } from "../services/cartReducer/selector";
import CartContainer from "./CartContainer";

function CartDetails({ isEmpty, onClose }) {
  const counter = useSelector(selectCounter);
  const formIsOpen = useSelector(selectModalOpen);
  const typeOfModal = useSelector(selectTypeOfModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
    onClose();
  };
  return (
    <>
      <div className={styles.full_container}>
        <h2 className={styles.heading}>Корзина</h2>
        <div className={styles.count}>{counter}</div>
        {isEmpty && <p className={styles.full_cart_empty}>Тут пока пусто :(</p>}
        <Collapse onClose={onClose} />
        {!isEmpty && <CartContainer />}
      </div>
    </>
  );
}

export default CartDetails;

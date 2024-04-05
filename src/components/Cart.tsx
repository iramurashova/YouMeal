import { MouseEventHandler, useState } from "react";
import styles from "../assets/styles/components/cart.module.css";
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
import { useAppDispatch, useAppSelector } from "../services/types";

function Cart() {
  const cartList = useAppSelector(selectCartList);
  const counter = useAppSelector(selectCounter);
  const isEmpty = cartList.length === 0;
  const [isOpen, setIsOpen] = useState(false);
  const formIsOpen = useAppSelector(selectModalOpen);
  const typeOfModal = useAppSelector(selectTypeOfModal);
  const dispatch = useAppDispatch();
  const onOpen: MouseEventHandler<HTMLElement> = (e) => {
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

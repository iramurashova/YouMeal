import React from "react";
import { useSelector } from "react-redux";
import { selectCartList } from "../services/cartReducer/selector";
import CheckoutButton from "./CheckoutButton";
import CartItem from "./CartItem";
import IMAGES from "../assets/images/Images";
import styles from '../assets/styles/components/cartContainer.module.css'

function CartContainer() {
  const cartList = useSelector(selectCartList);
  const total = cartList.reduce((acc, el) => acc + el.price * el.count, 0);
  return (
    <>
      <ul className={styles.list}>
        {cartList.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </ul>
      <div className={styles.summary}>
        <p className={styles.summary_heading}>Итого</p>
        <p className={styles.summary_count}>{total}₽</p>
      </div>
      <CheckoutButton />
      <div className={styles.footer}>
        <p className={styles.special}>
          <img src={IMAGES.cartIcon} alt="доставка" className="icon" />
          Бесплатная доставка
        </p>
      </div>
    </>
  );
}

export default CartContainer;

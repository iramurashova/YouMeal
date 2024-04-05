import React from "react";
import styles from "../assets/styles/components/cartItem.module.css";
import Count from "./Count";
import { TCartItem } from "../utils/types";
type TCartItemProps = {
  item: TCartItem;
};
function CartItem({ item }: TCartItemProps) {
  return item && item.count !== 0 ? (
    <div className={styles.item}>
      <h3 className={styles.heading}>{item.name}</h3>
      <img className={styles.image} src={item.link} alt={item.name} />
      <p className={styles.price}>{item.price}₽</p>
      <p className={styles.weight}>{item.weight}г</p>
      <div className={styles.count_container}>
        <Count item={item} />
      </div>
    </div>
  ) : null;
}

export default CartItem;

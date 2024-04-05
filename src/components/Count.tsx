import React from "react";
import styles from "../assets/styles/components/count.module.css";
import { selectCartList } from "../services/cartReducer/selector";
import { editCartList } from "../services/cartReducer/cartReducer";
import { TCartItem } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../services/types";
type TCountProps = {
  item: TCartItem;
}

function Count({ item }: TCountProps) {
  const cartList = useAppSelector(selectCartList);
  const count = cartList.find((el) => el._id === item._id)?.count || 0;
  let updatedCartList: TCartItem[] | [] = [];
  const dispatch = useAppDispatch();
  const increase = () => {
    if (count > 0) {
      updatedCartList = cartList.map((el) =>
        el._id === item._id ? { ...el, count: el.count && el.count + 1 } : el
      );
    } else {
      updatedCartList = [...cartList, { ...item, count: 1 }];
    }

    dispatch(editCartList(updatedCartList));
  };
  const decrease = () => {
    if (count !== 1) {
      updatedCartList = cartList.map((el) =>
        el._id === item._id ? { ...el, count: el.count && el.count - 1 } : el
      );
    } else {
      updatedCartList = cartList.filter((el) => el._id !== item._id);
    }
    dispatch(editCartList(updatedCartList));
  };
  return (
    <div className={styles.container}>
      <button onClick={decrease} className={styles.change}>
        -
      </button>
      <div className={styles.count}>{count}</div>
      <button onClick={increase} className={styles.change}>
        +
      </button>
    </div>
  );
}

export default Count;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartList } from "../services/cartReducer/selector";
import { editCartList } from "../services/cartReducer/cartReducer";
import Button from "./Button";
import styles from '../assets/styles/components/addProductButton.module.css'

function AddProductButton({item}) {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  const onClick = () => {
    const newItemIndex = cartList.findIndex((el) => el._id === item._id);

    if (newItemIndex !== -1) {
      const updatedCartList = cartList.map((el) =>
        el._id === item._id ? { ...el, count: el.count + 1 } : el
      );

      dispatch(editCartList(updatedCartList));
    } else {
      const newItem = { ...item, count: 1 };
      dispatch(editCartList([...cartList, newItem]));
    }
  };
  return (
    <Button className={styles["button"]} text="Добавить" onClick={onClick} />
  );
}

export default AddProductButton;

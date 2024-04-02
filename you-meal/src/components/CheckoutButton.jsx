import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../services/modalReducer/modalReducer";
import Button from "./Button";

function CheckoutButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal("delivery"));
  };
  return <Button type="button" text="Оформить заказ" onClick={handleClick} />;
}

export default CheckoutButton;

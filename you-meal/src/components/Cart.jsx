import React, { useState } from "react";
import IMAGES from "../assets/images/Images";
import styles from "../assets/styles/components/cart.module.css";

import Button from "./Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectModalOpen } from "../services/modalReducer/selector";
import CartDetails from "./CartDetails";
import Collapse from "./Collapse";

function Cart() {
  const isEmpty = false;
  const [isOpen, setIsOpen] = useState(false);
  

const onOpen = (e)=> {
  e.stopPropagation();
  setIsOpen(!isOpen);
}
const onClose = () => {
  setIsOpen(!isOpen);
}
  return (
    <>
    <aside className={styles["cart"]} onClick={(e)=> onOpen(e)}>
      <div className={ styles["first_line"]}>
      <h2 className={styles["heading"]}>Корзина</h2>
      <input type="text" className={styles["count"]} value="0" />
      </div>
      <div className={styles["details"]}>
     
      
     {isEmpty && <p className={styles["cart_empty"]}>Тут пока пусто :(</p>}
       {!isEmpty && (
         <>
           <ul className={styles["list"]}>
             <CartItem />
           </ul>
           <div className={styles["summary"]}>
             <p className={styles["summary_heading"]}>Итого</p>
             <p className={styles["summary_count"]}>550₽</p>
           </div>
           <Button text="Оформить заказ" />
           <div className={styles["footer"]}>
             <p className={styles["special"]}>
               <img src={IMAGES.cartIcon} alt="доставка" className="icon" />
               Бесплатная доставка
             </p>
          
           </div>
           </>
       )}
  </div>
      </aside>
      { isOpen && <CartDetails isEmpty = {isEmpty} onClose={onClose}/>}
     
 </>
    
   
  );
      }


export default Cart;

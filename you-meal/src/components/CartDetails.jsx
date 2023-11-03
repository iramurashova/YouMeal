import React from 'react'
import IMAGES from '../assets/images/Images'
import CartItem from './CartItem'
import styles from '../assets/styles/components/cartDetails.module.css'
import Button from './Button'
import Collapse from './Collapse'

function CartDetails({isEmpty, onClose}) {

  return (
    <div className = { styles["full_container"] }>
        
      <h2 className={styles["heading"]}>Корзина</h2>
      <input type="text" className={styles["count"]} value="0" />
     
    {isEmpty && <p className={styles['full_cart_empty']}>Тут пока пусто :(</p>}
    
    <Collapse onClose = {onClose}/>
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
  )
}

export default CartDetails
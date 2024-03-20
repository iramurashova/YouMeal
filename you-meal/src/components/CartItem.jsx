import React from 'react'
import styles from '../assets/styles/components/cartItem.module.css'
import { foodData } from '../assets/data/foodData'
import Count from './Count'
function CartItem({item}) {
 
  return (
    <div className = {styles.item}>
        <h3 className={styles.heading}>{item.name}</h3>
        <img className ={styles.image} src={item.link} alt={item.name} />
        <p className={styles.price}>{item.price}₽</p>
        <p className={styles.weight}>{item.weight}г</p>
        <div className={styles.count_container}>
        <Count value={item.count}/>
        </div>
    </div>
  )
}

export default CartItem
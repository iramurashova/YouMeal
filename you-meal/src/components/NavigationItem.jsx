import React from 'react'
import styles from '../assets/styles/components/navigationItem.module.css'
function NavigationItem({item}) {

  return (
    <li className={`${styles["link"]}`} >
   
      <img
        src={item.link}
        alt={item.name}
        className={styles["icon"]}
      />
      {item.name}
  </li>
  )
}

export default NavigationItem
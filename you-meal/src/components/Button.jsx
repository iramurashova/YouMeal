import React from 'react'
import styles from '../assets/styles/components/button.module.css'
function Button({text, onClick}) {
  return (
      <button className={styles["button"]} onClick={onClick}>{text}</button>
  )
}

export default Button
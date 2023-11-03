import React from 'react'
import styles from '../assets/styles/components/button.module.css'
function Button({text}) {
  return (
      <button className={styles["button"]}>{text}</button>
  )
}

export default Button
import React from 'react'
import styles from '../assets/styles/components/overlay.module.css'
function Overlay({onClose}) {
  return (
    <div className={styles['overlay']} onClick = {onClose}></div>
  )
}

export default Overlay
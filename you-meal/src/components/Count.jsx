import React from 'react'
import styles from '../assets/styles/components/count.module.css'
function Count() {
  return (
    <div className={styles["container"]}>
      <span className={styles["change"]}> - </span>
      <input
        type="text"
        name="count"
        value="1"
        disabled=""
        className={styles["count"]}
      />
      <span className={styles["change"]}> + </span>
    </div>
  )
}

export default Count
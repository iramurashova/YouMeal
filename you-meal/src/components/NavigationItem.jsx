import React, { useState } from "react";
import styles from "../assets/styles/components/navigationItem.module.css";
function NavigationItem({ item, setIsActive, isActive }) {


  const onClick = () => {
    setIsActive(item.name);
    
  }
  return (
    <li>
      <button className={`${styles.link} ${isActive === item.name ? styles.link_active : ""}`} onClick = {onClick}>
        <img src={item.link} alt={item.name} className={styles.icon}/>
        {item.name}
      </button>
    </li>
  );
}

export default NavigationItem;

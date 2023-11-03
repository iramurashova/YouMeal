import React from "react";
import styles from "../assets/styles/components/navigation.module.css";
import { navigationData } from "../assets/data/navigationData";
import NavigationItem from "./NavigationItem";
function Navigation() {
  return (
    <nav className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
       { navigationData.map((item) => <NavigationItem key = {item.name} item={item} />)}
      </ul>
    </nav>
  );
}

export default Navigation;

import { useState } from "react";
import styles from "../assets/styles/components/navigation.module.css";
import { navigationData } from "../assets/data/navigationData";
import NavigationItem from "./NavigationItem";
function Navigation() {
  const [isActive, setIsActive] = useState<string | null>(null);

  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {navigationData.map((item) => (
          <NavigationItem
            key={item.name}
            item={item}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

import styles from "../assets/styles/components/navigationItem.module.css";
import { TItemNav } from "../utils/types";
import { HashLink } from "react-router-hash-link";

type TNavigationItemProps = {
  item: TItemNav;
  setIsActive: React.Dispatch<React.SetStateAction<null | string>>;
  isActive: string | null;
};
function NavigationItem({ item, setIsActive, isActive }: TNavigationItemProps) {
  const onClick = () => {
    setIsActive(item.name);
  };
  return (
    <li>
      <HashLink
        smooth
        to={`#${item.id}`}
        className={`${styles.link} ${
          isActive === item.name ? styles.link_active : ""
        }`}
        onClick={onClick}
      >
        <img src={item.link} alt={item.name} className={styles.icon} />
        {item.name}
      </HashLink>
    </li>
  );
}

export default NavigationItem;

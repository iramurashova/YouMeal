import styles from "../assets/styles/components/orderItem.module.css";

import { TCartItem } from "../utils/types";
type TCartItemProps = {
  item: TCartItem;
};
function OrderItem({ item }: TCartItemProps) {
  return item && item.count !== 0 ? (
    <li className={styles.item}>
      <img className={styles.image} src={item.link} alt={item.name} />
      <h3 className={styles.heading}>{item.name}</h3>
      <p className={styles.price}>{`${item.count} x ${item.price}₽`}</p>
    </li>
  ) : null;
}

export default OrderItem;

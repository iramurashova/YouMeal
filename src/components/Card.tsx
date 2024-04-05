import styles from "../assets/styles/components/card.module.css";
import { getItemData } from "../services/dataReducer/dataReducer";
import { openModal } from "../services/modalReducer/modalReducer";

import AddProductButton from "./AddProductButton";
import { TItem } from "../utils/types";
import { useAppDispatch } from "../services/types";
import IMAGES from "../assets/images/Images";
type TCardProps = {
  item: TItem;
};

function Card({ item }: TCardProps) {
  const dispatch = useAppDispatch();
  const onOpen = () => {
    dispatch(getItemData(item));
    dispatch(openModal("item"));
  };

  return  (
    <>
      <li className={styles.card}>
        <img
          src={item.link}
          alt={item.name}
          className={styles.image}
          onClick={onOpen}
        />
        <p className={styles.price}>{`${item.price}₽`}</p>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.weight}>{`${item.weight}г`}</p>
        <AddProductButton item={item} />
      </li>
    </>
  ) 
}

export default Card;

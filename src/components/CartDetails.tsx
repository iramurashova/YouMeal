import styles from "../assets/styles/components/cartDetails.module.css";
import Collapse from "./Collapse";

import { selectCounter } from "../services/cartReducer/selector";
import CartContainer from "./CartContainer";
import { useAppSelector } from "../services/types";
type TCartDetailsProps = {
  isEmpty: boolean;
  onClose: () => void;
};

function CartDetails({ isEmpty, onClose }: TCartDetailsProps) {
  const counter = useAppSelector(selectCounter);

  return (
    <>
      <div className={styles.full_container}>
        <h2 className={styles.heading}>Корзина</h2>
        <div className={styles.count}>{counter}</div>
        {isEmpty && <p className={styles.full_cart_empty}>Тут пока пусто :(</p>}
        <Collapse onClose={onClose} />
        {!isEmpty && <CartContainer />}
      </div>
    </>
  );
}

export default CartDetails;

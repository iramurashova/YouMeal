
import { useAppSelector } from "../services/types";
import styles from "../assets/styles/components/order.module.css";
import OrderItem from "./Ordertem";
import { selectOrderDetails, selectOrderList, selectOrderWay } from "../services/orderReducer/selector";

// type TOrderProps = {};

function Order() {
  const orderList = useAppSelector(selectOrderList);
  const total = orderList.reduce(
    (acc, el) => acc + +el.price * (el.count ? el.count : 0),
    0
  );
  const way = useAppSelector(selectOrderWay);
  const details = useAppSelector(selectOrderDetails);
  return (
    <div className={styles.order}>
      <h2 className={styles.title}>{`${details?.name}, ваш заказ:`}</h2>
      <ul className={styles.order_list}>
        {orderList.map((el) => (
          <OrderItem key={el._id} item={el} />
        ))}
        <li className={styles.summary}>
          <p className={styles.summary_heading}>Итого</p>
          <p className={styles.summary_count}>{total}₽</p>
        </li>
      </ul>
      <p className={styles.way_container}>{`Cпособ получения: `}
      <ins className={styles.way}>{way}</ins></p>
 
   
<p className={styles.adress}> { way === "Доставка" ? `по адресу: ${details?.adress}, этаж ${details?.level}, домофон ${details?.doorphone}` : "по адресу: Лесная, 2 "} успешно оформлен</p> 
    </div>
  );
}

export default Order;

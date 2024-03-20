import React, { useState } from "react";
import Button from "./Button";
import styles from "../assets/styles/components/delivery.module.css";
import { useForm } from "../hooks/useForm";
import IMAGES from "../assets/images/Images";
function Delivery () {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { values, handleChange, setValues } = useForm({
    name: "",
    tel: "",
    adress: "",
    level: "",
    doorphone: "",
  });
  const [way, setWay] = useState("Доставка");
  const changeWay = (e) => {
    setWay(e.target.value);
  };
  return (
    <div className={styles.delivery}>
      <img className={styles.image} src={IMAGES.delivery}/>
      <form className={styles.form} name="delivery" onSubmit={onSubmit}>
        <h2 className={styles.title}>Доставка</h2>
        <fieldset className={styles.personal}>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            name="name"
            id="name"
            placeholder="Ваше имя"
            className={styles.input_size_large}
            required
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            onChange={handleChange}
            value={values.tel}
            placeholder="Телефон"
            className={styles.input_size_large}
            required
          />
        </fieldset>
        <fieldset className={styles.way}>
          <label htmlFor="pickup" className={styles.label}>
            <input
              type="radio"
              name="delivery"
              id="pickup"
              className={styles.radio}
              value="Самовывоз"
              onChange={changeWay}
              checked={way === "Самовывоз" ? true : false}
            />
            <span className={styles.pseudo_item}></span>
            <span className={styles.text}>Самовывоз</span>
          </label>

          <label htmlFor="delivery" className={styles.label}>
            <input
              type="radio"
              name="delivery"
              id="delivery"
              value="Доставка"
              className={styles.radio}
              onChange={changeWay}
              checked={way === "Доставка" ? true : false}
            />
            <span className={styles.pseudo_item}></span>
            <span className={styles.text}>Доставка</span>
          </label>
        </fieldset>
        <fieldset className={styles.adress}>
          <input
            type="text"
            name="adress"
            id="adress"
            onChange={handleChange}
            value={values.adress}
            placeholder="Улица, дом, квартира"
            className={styles.input_size_large}
          />
          <input
            type="number"
            name="level"
            id="level"
            onChange={handleChange}
            value={values.level}
      min="-5"
            placeholder="Этаж"
            className={styles.input_size_small}
          />
          <input
            type="text"
            name="doorphone"
            onChange={handleChange}
            value={values.doorphone}
            id="doorphone"
            placeholder="Домофон"
            className={styles.input_size_small}
          />
        </fieldset>
        <div className="button">
          <Button type="submit" text="Оформить" />
        </div>
      </form>
    </div>
  );
}

export default Delivery;

import   { useState, FocusEvent, FormEvent }  from "react";
import styles from "../assets/styles/components/delivery.module.css";
import IMAGES from "../assets/images/Images";
import { useFormHook } from "../hooks/useForm";
import Button from "./Button";

function Delivery() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    console.log(way);
  };
  console.log("render");
  const [way, setWay] = useState("Самовывоз");
  const [isOpen, setIsOpen] = useState(false);
  const { values, handleChange } = useFormHook({
    name: "",
    tel: "",
    adress: "",
    level: "",
    doorphone: "",
  });
  const changeWay = (e: FocusEvent<HTMLInputElement>) => {
    e.target?.value && setWay(e.target.value);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.delivery}>
      <img className={styles.image} src={IMAGES.delivery} />
      <form className={styles.form} name="delivery" onSubmit={onSubmit}>
        <div className={styles.inputs}>
          <h2 className={styles.title}>Доставка</h2>
          <div className={styles.personal}>
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
          </div>
          <div className={styles.way}>
            <label htmlFor="pickup" className={styles.label}>
              <input
                type="radio"
                name="delivery"
                id="pickup"
                className={styles.radio}
                value="Самовывоз"
                onChange={changeWay}
                checked={way === "Самовывоз"}
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
                checked={way === "Доставка"}
              />
              <span className={styles.pseudo_item}></span>
              <span className={styles.text}>Доставка</span>
            </label>
          </div>
          {isOpen && (
            <div className={styles.adress}>
              <input
                type="text"
                name="adress"
                id="adress"
                onChange={handleChange}
                value={values.adress}
                placeholder="Улица, дом, квартира"
                className={styles.input_size_large}
                required={way === "Доставка"}
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
                required={way === "Доставка"}
              />
              <input
                type="text"
                name="doorphone"
                onChange={handleChange}
                value={values.doorphone}
                id="doorphone"
                placeholder="Домофон"
                className={styles.input_size_small}
                required={way === "Доставка"}
              />
            </div>
          )}
        </div>

        <div className={styles.button}>
          <Button htmlType="submit" text="Оформить"/>
        </div>
      </form>
    </div>
  );
}

export default Delivery;

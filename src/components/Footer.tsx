import React from "react";
import styles from "../assets/styles/components/footer.module.css";
import IMAGES from "../assets/images/Images";
function Footer() {
  return (
    <footer className={styles.footer}>
      <figure className={styles.logo_container}>
        <img
          src={IMAGES.footerLogo}
          alt="Название компании"
          className={styles.logo}
        />
        <img
          src={IMAGES.footerIcon}
          alt="Иконка компании"
          className={styles.logo_icon}
        />
      </figure>
      <div className={styles.contacts}>
        <h3 className={styles.heading}>Номер для заказа</h3>

        <p className={styles.number}>
          <img
            src={IMAGES.numberIcon}
            alt="Телефон"
            className={styles.icon}
          />
          +7(930)833-38-11
        </p>
      </div>
      <div className={styles.social}>
        <h3 className={styles.heading}>Мы в соцсетях</h3>
        <ul className={styles.list}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="none"
            >
              <g clipPath="url(#a)">
                <a
                  href="https://vk.com"
                  className={styles.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <path
                    className={styles.color}
                    fill="#FF7020"
                    d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0Zm6.922 20.308s1.592 1.571 1.984 2.3c.012.016.017.03.02.038.16.268.198.476.119.632-.131.259-.581.386-.735.398h-2.813c-.195 0-.603-.051-1.098-.392-.38-.267-.756-.703-1.122-1.129-.545-.634-1.018-1.181-1.494-1.181-.06 0-.12.01-.178.028-.36.116-.821.63-.821 1.999 0 .427-.338.673-.576.673H16.92c-.439 0-2.724-.154-4.75-2.29-2.478-2.615-4.71-7.861-4.728-7.91-.14-.34.15-.521.467-.521h2.84c.38 0 .503.23.59.434.1.239.472 1.185 1.081 2.25.988 1.737 1.594 2.442 2.08 2.442a.561.561 0 0 0 .26-.068c.634-.352.516-2.612.488-3.08 0-.088-.002-1.011-.327-1.454-.232-.32-.628-.442-.868-.487.097-.134.225-.243.373-.317.435-.217 1.219-.25 1.997-.25h.433c.844.012 1.061.066 1.367.143.619.148.632.548.578 1.915-.017.388-.034.826-.034 1.344 0 .113-.006.233-.006.36-.018.696-.041 1.485.45 1.81.064.04.138.061.214.061.17 0 .684 0 2.076-2.387.429-.768.801-1.566 1.115-2.388.028-.05.11-.2.208-.257a.499.499 0 0 1 .233-.055h3.34c.363 0 .612.055.66.195.082.223-.016.904-1.54 2.969l-.68.898c-1.383 1.81-1.383 1.903.085 3.277Z"
                  />
                </a>
              </g>
              <defs></defs>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="none"
            >
              <g clipPath="url(#a)">
                <a
                  href="https://web.telegram.org/k/"
                  className={styles.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <path
                    className={styles.color}
                    fill="#FF7020"
                    d="M36 18a18 18 0 1 1-36 0 18 18 0 0 1 36 0Zm-17.354-4.711c-1.75.729-5.252 2.236-10.499 4.522-.85.337-1.298.67-1.338.994-.068.547.618.763 1.552 1.058l.394.124c.918.299 2.155.648 2.796.661.585.014 1.236-.225 1.954-.72 4.902-3.31 7.434-4.981 7.591-5.017.113-.027.27-.059.373.036.106.092.095.27.084.317-.068.29-2.761 2.792-4.154 4.088-.434.405-.742.691-.805.756-.139.142-.28.282-.423.419-.855.823-1.494 1.44.034 2.448.735.486 1.325.884 1.912 1.284.639.437 1.278.871 2.106 1.416.21.135.412.281.608.42.744.532 1.417 1.009 2.243.932.481-.045.978-.495 1.23-1.845.597-3.188 1.769-10.093 2.039-12.94a3.202 3.202 0 0 0-.03-.709.758.758 0 0 0-.256-.488 1.184 1.184 0 0 0-.697-.209c-.675.011-1.717.373-6.714 2.453Z"
                  />
                </a>
              </g>
              <defs></defs>
            </svg>
          </li>
        </ul>
      </div>
      <ul className={styles.copyright}>
        <li>
          <p className={styles.copyright_item}>© YouMeal, 2022</p>
        </li>
        <li>
          <p className={styles.copyright_item}>Design: Anastasia Ilina</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

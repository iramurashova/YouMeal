import styles from "../assets/styles/components/button.module.css";
type TButtonProps = {
  text: string;
  htmlType?: "button" | "submit" | "reset";
  type?: "default" | "secondary";
  onClick?: () => void;
};
function Button({
  text,
  htmlType = "button",
  type = "default",
  onClick,
}: TButtonProps) {
  return (
    <button
      className={`${styles.button} ${
        type === "secondary" ? styles.secondary : ""
      }`}
      type={htmlType}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

import styles from "../assets/styles/components/overlay.module.css";
type TOverlayProps = { onClose: () => void };

function Overlay({ onClose }: TOverlayProps) {
  return <div className={styles["overlay"]} onClick={onClose}></div>;
}

export default Overlay;

import React from "react";
import styles from "../assets/styles/components/collapse.module.css";

type TCollapseProps = {
  onClose: () => void;
};
function Collapse({ onClose }: TCollapseProps) {
  return (
    <button className={styles.collapse} onClick={onClose}>
      Свернуть
    </button>
  );
}

export default Collapse;

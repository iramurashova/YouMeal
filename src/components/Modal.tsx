import  { ReactNode, useEffect } from 'react'
import IMAGES from '../assets/images/Images'
import styles from '../assets/styles/components/modal.module.css'
import Overlay from './Overlay'
import { createPortal } from 'react-dom'



type TModalProps = {
  onClose: () => void,
  children: ReactNode
}
function Modal({onClose, children}: TModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
          e.key === "Escape" && onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
          document.removeEventListener("keydown", handleEscape);
        };
      }, []);
  return createPortal(
    <>
     <div className={styles.container}>
           <button className={styles.close}>
          <img
            className={styles["close_image"]}
            src={IMAGES.modalClose}
            alt="Закрыть"
            onClick={onClose}
          />
        </button>
        {children}
    </div>
    <Overlay onClose = {onClose}/></>,
   document.getElementById('root-modal')!
   
  )
}

export default Modal
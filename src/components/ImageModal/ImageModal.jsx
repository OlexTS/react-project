import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect } from "react";

ReactModal.setAppElement("#root");
const ImageModal = ({ isOpen, onClose, imageUrl, tag }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ESC") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css["modal-content"]}
      overlayClassName={css["modal-overlay"]}
    >
      <div onClick={handleOverlayClick}>
        <img src={imageUrl} alt={tag} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;

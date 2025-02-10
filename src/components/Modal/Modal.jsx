import css from "./Modal.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Modal from '@mui/material/Modal';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className={css.overlayStyles} onClick={onClose}>
      <div className={css.modalStyles} onClick={(e) => e.stopPropagation()}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="h2">
            Видалення контакту
          </Typography>
          <Typography sx={{ mt: 2, marginBottom: "20px" }}>
            Ви впевнені, що хочете видалити контакт?
          </Typography>
          <Button onClick={onConfirm}>Так</Button>
          <Button onClick={onClose}>Скасувати</Button>
        </Box>
      </div>
    </div>
  );
};

export default Modal;

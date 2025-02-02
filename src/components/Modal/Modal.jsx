import css from './Modal.module.css'


const Modal = ({isOpen, onClose, onConfirm}) => {
    if(!isOpen) return null
  return (
    <div className={css.overlayStyles} onClick={onClose}>
      <div className={css.modalStyles} onClick={(e) => e.stopPropagation()}>
        <p>Ви впевнені, що хочете видалити контакт?</p>
        <button onClick={onConfirm}>Так</button>
        <button onClick={onClose}>Скасувати</button>
      </div>
    </div>
  )
}

export default Modal
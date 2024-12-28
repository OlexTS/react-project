import { IoArrowBackOutline } from "react-icons/io5";
import css from './GoBackButton.module.css'


const GoBackButton = ({onClick}) => {
  return (
    <button className={css.button} onClick={onClick}><IoArrowBackOutline/> Back</button>
  )
}

export default GoBackButton
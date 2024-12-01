import { BallTriangle } from "react-loader-spinner";
import css from './Loader.module.css'

const Loader = () => {
  return (
    <BallTriangle
  height={200}
  width={200}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass={css.loader}
  visible={true}
  />
  )
}

export default Loader
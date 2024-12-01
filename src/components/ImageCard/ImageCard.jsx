import css from "./ImageCard.module.css";
const ImageCard = ({ img, desc }) => {
  return (
    <div>
      <img className={css.image} src={img} alt={desc} />
    </div>
  );
};

export default ImageCard;

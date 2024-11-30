const ImageCard = ({ img, desc }) => {
  return (
    <div>
      <img src={img} alt={desc} width={200} />
    </div>
  );
};

export default ImageCard;

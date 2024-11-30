import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.item} key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard
            img={image.cover_photo.urls.small}
            desc={image.cover_photo.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

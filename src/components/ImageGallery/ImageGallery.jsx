import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({images}) => {
		
  return (
    <ul>
	{images.map(image=><li key={image.id}>
		<ImageCard img={image.cover_photo.urls.regular} desc={image.cover_photo.alt_description}/>
	</li>)}
	
</ul>
)}

export default ImageGallery 

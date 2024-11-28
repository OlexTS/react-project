import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({images}) => {
  return (
    <ul>
	{images.map(image=><li key={image.id}>
		<ImageCard img={image.urls.regular} desc={image.description}/>
	</li>)}
	
</ul>
)}

export default ImageGallery
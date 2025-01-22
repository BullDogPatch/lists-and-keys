import './ImageComponent.css';

const ImageComponent = ({ src, alt }) => {
  return <img src={src} alt={alt} className='image' />;
};

export default ImageComponent;

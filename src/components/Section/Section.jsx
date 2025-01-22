import ImageComponent from '../ImageComponent/ImageComponent';
import { data } from '../../lib/data';
import './Section.css';

const Section = () => {
  return (
    <section className='section'>
      {data.map((image) => (
        <ImageComponent key={image.id} src={image.imageUrl} alt={image.alt} />
      ))}
    </section>
  );
};

export default Section;

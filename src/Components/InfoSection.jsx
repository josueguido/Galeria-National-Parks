import PropTypes from 'prop-types';

const Info = ({ imageSrc, paragraph, imageLeft }) => {
  return (
    <div className={`flex ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} my-10 px-10 py-10 gap-10 flex-col justify-center items-center text-center`}>
      <img src={imageSrc} className=" w-72 h-44 drop-shadow-sm rounded-md"/>
      <p className='font-normal font-serif text-balance md:text-pretty py-10'>{paragraph}</p>
    </div>
  );
};


Info.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  imageLeft: PropTypes.bool // Propiedad opcional para determinar si la imagen debe estar a la izquierda o a la derecha
};
//  imageLeft={true} // La imagen estará a la izquierda
//  imageLeft={false} // La imagen estará a la derecha
export default Info;

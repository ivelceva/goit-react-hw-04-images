import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import css from '../imageGallery/ImageGallery.module.css';

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className={css.gallery}>
      {hits.map(hit => {
        return <ImageGalleryItem key={hit.id} hit={hit} onClick={onClick} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;

// import PropTypes from 'prop-types';
// import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
// import css from '../imageGallery/ImageGallery.module.css';

// export const ImageGallery = ({ hits, onClick }) => {
//   return (
//     <ul className={css.gallery}>
//       {hits.map(hit => {
//         return <ImageGalleryItem key={hit.id} hit={hit} onClick={onClick} />;
//       })}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   hits: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       onClick: PropTypes.func.isRequired,
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// ImageGallery.propTypes = {
//   id: PropTypes.number,
//   onClick: PropTypes.func.isRequired,
// };

import React from 'react';
import PropTypes from 'prop-types';
import css from '../imageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ hit, onClick }) => {
  const { webformatURL, largeImageURL } = hit;
  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={webformatURL}
        alt=""
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

// import React from 'react';
// import PropTypes from 'prop-types';
// import css from '../imageGalleryItem/ImageGalleryItem.module.css';

// const ImageGalleryItem = ({ hit, onClick }) => {
//   const { webformatURL, largeImageURL } = hit;
//   return (
//     <li className={css.item}>
//       <img
//         className={css.image}
//         src={webformatURL}
//         alt=""
//         onClick={() => onClick(largeImageURL)}
//       />
//     </li>
//   );
// };

// export default ImageGalleryItem;

// ImageGalleryItem.propTypes = {
//   hit: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   }),
//   onClick: PropTypes.func.isRequired,
// };

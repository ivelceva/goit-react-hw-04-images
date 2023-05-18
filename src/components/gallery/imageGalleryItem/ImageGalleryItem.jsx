import React from 'react';
import PropTypes from 'prop-types';
import css from '../imageGalleryItem/ImageGalleryItem.module.css';


//  const ImageGalleryItem = ({
//   webformatURL,
//   largeImageURL,
//   tags,
//   onClickImage,
// }) => {
//   return (
//     <>
//       <li className={css.item}>
//         <img
//           onClick={() => onClickImage(largeImageURL)}
//           className={css.image}
//           src={webformatURL}
//           alt={tags}
//           largeimage={largeImageURL}
//         />
//       </li>
//     </>
//   );
// };

// ImageGalleryItem.propTypes = {
//   onClickImage: PropTypes.func,
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };

//export default ImageGalleryItem;
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

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import css from '../imageGallery/ImageGallery.module.css';

// export const ImageGallery = ({ images, onClickImage }) => {
//   return (
//     <ul className={css.gallery}>
//       {images.map(({ webformatURL, largeImageURL, id, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           tags={tags}
//           onClickImage={onClickImage}
//         />
//       ))}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   onClickImage: PropTypes.func,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ),
// };

export const ImageGallery = ({ hits, onClick }) => {
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
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

ImageGallery.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

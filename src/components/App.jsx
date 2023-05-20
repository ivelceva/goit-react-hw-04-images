import React, { useState, useEffect } from 'react';
import { getFetch } from '../Fetch';
import Searchbar from './searchBar/SearchBar';
import ImageGallery from './gallery/imageGallery/ImageGallery';
import Loader from './gallery/loader/Loader';
import Modal from './gallery/modal/Modal';
import LoadMore from './gallery/button/Button';

const App = () => {
  const [query, setQuery] = useState(null);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  useEffect(() => {
    const handleFetchHits = async () => {
      try {
        setLoading(true);

        const data = await getFetch(query, page, perPage);

        if (data.hits.length === 0) {
          setError({
            status: true,
            message: `Sorry, there are no images matching ${query}. Please try again.`,
          });
          return;
        }

        const totalPages = Math.ceil(data.totalHits / perPage);

        setHits(prevHits => [...prevHits, ...data.hits]);
        setTotalPages(totalPages);
      } catch (error) {
        setError({
          status: true,
          message: 'Something went wrong :( Please try again later!',
        });
      } finally {
        setLoading(false);
      }
    };

    if (query && page > 0) {
      handleFetchHits();
    }
  }, [query, page, perPage]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = newQuery => {
    if (newQuery !== query) {
      setHits([]);
      setQuery(newQuery);
      setPage(1);
      setError({
        status: false,
        message: '',
      });
    }
  };

  const toggleModal = url => {
    setCurrentLargeImageURL(url);
  };

  const isHits = hits.length > 0;
  const showError = error.status && !loading;
  const errorMessage = error.message;
  const buttonVisible = isHits && page < totalPages && !loading;

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {showError && errorMessage}
      {isHits && <ImageGallery hits={hits} onClick={toggleModal} />}
      {loading && <Loader />}
      {buttonVisible && <LoadMore onClick={handleLoadMore} />}
      {currentLargeImageURL && (
        <Modal
          largeImageURL={currentLargeImageURL}
          onModalClose={() => setCurrentLargeImageURL('')}
        />
      )}
    </>
  );
};

export default App;

// import React from 'react';
// import Gallery from './Gallery';

// export const App = () => {
//   return (
//     <div>
//       <Gallery />
//     </div>
//   );
// };

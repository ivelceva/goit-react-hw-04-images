import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ onModalClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27 || e.currentTarget === e.target) {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClick}>
      <ModalContent largeImageURL={largeImageURL} />
    </div>
  );
};

const ModalContent = ({ largeImageURL }) => (
  <div className={css.modal}>
    <img src={largeImageURL} alt="" />
  </div>
);

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;


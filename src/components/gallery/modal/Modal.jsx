import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27 || e.currentTarget === e.target) {
      return this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleKeyDown}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};


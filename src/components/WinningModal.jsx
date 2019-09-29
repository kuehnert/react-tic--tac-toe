import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import backgroundColor from '../utils/backgroundColor';

function WinningModal(props) {
  const { gameState, handleNewGame, message } = props;

  return (
    <Modal
      isOpen={gameState !== 0}
      onRequestClose={handleNewGame}
      contentLabel="Game Over"
      className={`modal ${backgroundColor(gameState)}`}
      closeTimeoutMS={200}
      ariaHideApp={false}>
      <h2 className="modal__title">Game Over</h2>

      <p className="modal__body">{message}</p>

      <button className="button" onClick={handleNewGame}>
        New Game
      </button>
    </Modal>
  );
}

WinningModal.propTypes = {
  gameState: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default WinningModal;

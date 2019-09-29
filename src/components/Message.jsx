import React from 'react';
import PropTypes from 'prop-types';
import backgroundColor from '../utils/backgroundColor';

function Message(props) {
  return <div className={`message ${backgroundColor(props.currentPlayer)}`}>{props.text}</div>;
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  currentPlayer: PropTypes.number.isRequired,
};

export default Message;

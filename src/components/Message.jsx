import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  return <div className="message">{props.text}</div>;
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;

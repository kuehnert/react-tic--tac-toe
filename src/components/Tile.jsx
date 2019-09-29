import React from 'react';
import PropTypes from 'prop-types';

function tileClass(value) {
  switch (value) {
    case 1:
      return 'tile-player1';
    case 2:
      return 'tile-player2';
    default:
      return 'tile-neutral';
  }
}

function tileLabel(value) {
  switch (value) {
    case 1:
      return '\u274C';
    case 2:
      return '\u2B55';
    default:
      return '';
  }
}

function Tile(props) {
  const { index, value } = props;

  return (
    <div className={`tile ${tileClass(value)}`} onClick={() => props.handleClick(index)}>
      {tileLabel(value)}
    </div>
  );
}

Tile.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
};

export default Tile;

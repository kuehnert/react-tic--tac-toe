import React from 'react';
import PropTypes from 'prop-types';
import playerLabel from '../utils/playerLabel'
import backgroundColor from '../utils/backgroundColor'

function Tile(props) {
  const { index, value } = props;

  return (
    <div className={`tile tile${index} ${backgroundColor(value)}`} onClick={() => props.handleClick(index)}>
      {playerLabel(value)}
    </div>
  );
}

Tile.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
};

export default Tile;

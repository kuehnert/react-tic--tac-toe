import React from 'react';
import PropTypes from 'prop-types';
import playerLabel from '../utils/playerLabel';
import backgroundColor from '../utils/backgroundColor';
import { SwitchTransition } from 'react-transition-group';
import FadeTransition from './FadeTransition';

function Tile(props) {
  const { index, value } = props;

  return (
    <SwitchTransition>
      <FadeTransition key={value}>
        <div
          className={`tile tile${index} ${backgroundColor(value)}`}
          onClick={() => props.handleClick(index)}>
          {playerLabel(value)}
        </div>
      </FadeTransition>
    </SwitchTransition>
  );
}

Tile.propTypes = {
  index: PropTypes.number,
  value: PropTypes.number,
};

export default Tile;

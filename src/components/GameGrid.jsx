import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

function renderTiles(tiles, handleClick) {
  return tiles.map((t, i) => <Tile key={i} index={i} value={t} handleClick={handleClick} /> )
}

function GameGrid(props) {
  return (
    <div className="gamegrid">
      {renderTiles(props.tiles, props.handleClick)}
    </div>
  );
}

GameGrid.propTypes = {
  tiles: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GameGrid;

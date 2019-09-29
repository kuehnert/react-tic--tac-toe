import React from 'react';

import GameGrid from './GameGrid';
import Header from './Header';
import Message from './Message';
import WinningModal from './WinningModal';
import playerLabel from '../utils/playerLabel'

class App extends React.Component {
  defaultState = JSON.stringify({
    tiles: Array(9).fill(0),
    currentPlayer: 1,
    message: `Welcome to the game! It's player ${playerLabel(1)}'s turn.`,
    winningCombination: null,
    moveCounter: 0,
    gameState: 0,
  });

  state = JSON.parse(this.defaultState);

  winningCombinations = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  handleNewGame = () => {
    this.setState(JSON.parse(this.defaultState));
  };

  hasWon = () => {
    const { tiles, currentPlayer } = this.state;

    const winningCombination = this.winningCombinations.find(combination => {
      return combination.every(index => tiles[index] === currentPlayer);
    });

    return winningCombination;
  };

  checkTile = index => {
    let { moveCounter, currentPlayer, tiles } = this.state;

    if (tiles[index] === 0) {
      tiles[index] = currentPlayer;
      moveCounter += 1;
      const winningCombination = this.hasWon();

      if (winningCombination) {
        const message = `Congratulations, player ${playerLabel(currentPlayer)}, you have won!`;
        const gameState = currentPlayer;
        this.setState({ gameState, message, moveCounter, winningCombination });
      } else if (moveCounter === 9) {
        const message = `Oh dear, it's a tie!`;
        const gameState = 3;
        this.setState({ gameState, message, moveCounter });
      } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        const message = `It's player ${playerLabel(currentPlayer)}'s turn.`;
        this.setState({ currentPlayer, message, moveCounter, tiles });
      }
    }
  };

  render() {
    const { gameState, tiles, message } = this.state;

    return (
      <div>
        <Header title="Noughts and Crosses" />

        <div className="container">
          <Message text={message} />

          <GameGrid tiles={tiles} handleClick={this.checkTile} />
        </div>

        <WinningModal gameState={gameState} message={message} handleNewGame={this.handleNewGame} />
      </div>
    );
  }
}

export default App;

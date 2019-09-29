import React from 'react';
import Header from './Header';
import GameGrid from './GameGrid';
import Message from './Message';

class App extends React.Component {
  state = {
    tiles: Array(9).fill(0),
    currentPlayer: 1,
    message: "Welcome to the game! It's player 1's turn.",
  };

  winningPositions = [
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

  hasWon = () => {
    const { tiles, currentPlayer } = this.state;

    return this.winningPositions.some(combination => {
      return combination.every(index => tiles[index] === currentPlayer);
    });
  };

  checkTile = index => {
    let { tiles, currentPlayer } = this.state;

    if (tiles[index] === 0) {
      tiles[index] = currentPlayer;

      if (this.hasWon()) {
        const message = `Congratulations, player ${currentPlayer}, you have won!`;
        this.setState({ message });
      } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        const message = `It's player ${currentPlayer}'s turn.`;
        this.setState({ currentPlayer, message, tiles });
      }
    }
  };

  render() {
    const { tiles, message } = this.state;

    return (
      <div>
        <Header title="Noughts and Crosses" />

        <div className="container">
          <Message text={message} />

          <GameGrid tiles={tiles} handleClick={this.checkTile} />
        </div>
      </div>
    );
  }
}

export default App;

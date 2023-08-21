import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BOARD_SIZE = 8;
const NUM_MINES = 10;

class MinesweeperGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.initializeBoard(),
      gameOver: false,
      score: 0,
    };
  }

  initializeBoard() {
    const board = Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => ({
        isMine: false,
        isOpen: false,
        count: 0,
      }))
    );

    this.placeMines(board);
    this.calculateCounts(board);

    return board;
  }

  placeMines(board) {
    let minesPlaced = 0;
    while (minesPlaced < NUM_MINES) {
      const row = Math.floor(Math.random() * BOARD_SIZE);
      const col = Math.floor(Math.random() * BOARD_SIZE);
      if (!board[row][col].isMine) {
        board[row][col].isMine = true;
        minesPlaced++;
      }
    }
  }

  calculateCounts(board) {
    const neighbors = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (!board[row][col].isMine) {
          let count = 0;
          neighbors.forEach(([dx, dy]) => {
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE) {
              count += board[newRow][newCol].isMine ? 1 : 0;
            }
          });
          board[row][col].count = count;
        }
      }
    }
  }

  handleCellClick = (row, col) => {
    if (this.state.gameOver || this.state.board[row][col].isOpen) return;

    const newBoard = [...this.state.board];
    newBoard[row][col].isOpen = true;

    if (newBoard[row][col].isMine) {
      const updatedScore = this.state.score - 10; // Subtract 10 points
      this.setState({ board: newBoard, gameOver: true, score: updatedScore });
    } else if (newBoard[row][col].count === 0) {
      this.openEmptyCells(newBoard, row, col);
    } else {
      const updatedScore = this.state.score + 5; // Add 5 points
      this.setState({ board: newBoard, score: updatedScore });
    }
  };


  handlePlayAgain = () => {
    this.setState({
      board: this.initializeBoard(),
      gameOver: false,
      score: 0,
    });
  };

  handleCellFlag = (event, row, col) => {
    event.preventDefault(); // Prevent default context menu
    if (this.state.gameOver || this.state.board[row][col].isOpen) return;

    const newBoard = [...this.state.board];
    newBoard[row][col].flagged = !newBoard[row][col].flagged;

    this.setState({ board: newBoard });
  };

  openEmptyCells(board, row, col) {
    const neighbors = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    board[row][col].isOpen = true;

    neighbors.forEach(([dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE && !board[newRow][newCol].isOpen) {
        if (board[newRow][newCol].count === 0) {
          this.openEmptyCells(board, newRow, newCol);
        } else {
          board[newRow][newCol].isOpen = true;
        }
      }
    });

    this.setState({ board });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Minesweeper</Text>
        <Text style={styles.score}>Score: {this.state.score}</Text>
        <View style={styles.board}>
          {this.state.board.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, colIndex) => (
                <Cell
                  key={colIndex}
                  cell={cell}
                  onClick={() => this.handleCellClick(rowIndex, colIndex)}
                />
              ))}
            </View>
          ))}
        </View>
        {this.state.gameOver && (
          <View>
            <Text style={styles.gameOver}>
              Game Over! Final Score: {this.state.score}
            </Text>
            <TouchableOpacity
              style={styles.playAgainButton}
              onPress={this.handlePlayAgain}
            >
              <Text style={styles.playAgainButtonText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const Cell = ({ cell, onClick }) => {
  // Update cellStyle to hide red mine cells
  const cellStyle = [
    styles.cell,
    cell.isOpen ? styles.openCell : '',
    cell.isOpen && cell.isMine ? styles.mineCell : '',
  ];

  return (
    <TouchableOpacity style={cellStyle} onPress={onClick}>
      {cell.isOpen && !cell.isMine && cell.count > 0 && <Text>{cell.count}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  board: {
    borderWidth: 2,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  openCell: {
    backgroundColor: 'lightgray',
  },
  mineCell: {
    backgroundColor: 'red',
  },
  gameOver: {
    fontSize: 20,
    marginTop: 10,
    color: 'red',
  },
  playAgainButton: {
    marginTop: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  playAgainButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MinesweeperGame;
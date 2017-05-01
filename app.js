// var game = new TicTacToe();

var TicTacToe = function () {
  this.board = [];
  this.winner = null;
}

TicTacToe.prototype.startGame = function () {
  this.board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  alert(['Game has started! Here is your board:\n', this.board]);
  var x, y;
  while (!this.winner) {
    x = prompt('Player X, where would you like to go?');
    while (x === 'X' || x === 'Y' || x < 1 || x > 9) {
      x = prompt('That is not a valid spot. Please try again.');
    }
    this.takeTurn('X', x);
    console.log('')
    this.checkWinner();
    
    if (!this.winner) {
      y = prompt('Player Y, where would you like to go?');
      while (y === 'X' || y === 'Y' || y < 1 || y > 9) {
        y = prompt('That is not a valid spot. Please try again.');
      }

      this.takeTurn('Y', y);
      this.checkWinner();
    }
  }

  return this.winner;
};

TicTacToe.prototype.takeTurn = function (player, spot) {
  // if it's X's turn, allow X to choose
  if (player === 'X') {
    this.board[spot] = 'X';
  } else {
    this.board[spot] = 'Y';
  }
}

TicTacToe.prototype.checkWinner = function () {
  // for each row, check if there are 3 of the same symbol
  for (var r = 0; r < 3; r++) {
    if (this.board[r][0] === this.board[r][1] && this.board[r][1] === this.board[r][2]) {
      this.winner = this.board[r][0];
    }
  }

  // for each col, check if there are 3 of the same symbol
  for (var c = 0; c < 3; c++) {
    if (this.board[0][c] === this.board[1][c] && this.board[1][c] === this.board[2][c]) {
      this.winner = this.board[0][c];
    }
  }

  // check \ diagonal if there are 3 of the same symbol
  // check / diagonal if  there are 3 of the same symbol
  for (d = 0; d < 3; d++) {
    if (this.board[0][0] === this.board[1][1] && his.board[1][1] === this.board[2][2] || 
      this.board[0][2] === this.board[1][1] && his.board[2][0] === this.board[1][1]) {
      this.winner = this.board[1][1];
    }
  }

  // if all squares are filled, set winner to 'none'
  var continueGame = false;
  this.board.forEach(function(row) {
    row.forEach(function (entry) {
      if (typeof entry === 'number') {
        continueGame = true;
      }
    });
  });

  if (!continueGame) {
    this.winner = 'tie';
  }

}
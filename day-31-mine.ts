class Game {
	constructor() {
		this.board = []
		this.board.length = 7
		this.board.fill(['.', '.', '.', '.', '.', '.', '.'])
		this.gameOver = false
		this.winer = null
		this.lastMove = null
		this.players = ['x', '0']
		this.turn = 0
	}

	play() {
		while (!this.gameOver) {
			this.printBoard()
			this.move(this.players[this.turn])
			this.checkWin()

		this.printOutcome()
		}
	}

	printBoard() {
		for (const row of this.board) {
			console.log(row.join(""))
		}
	}

	move(player: string) {
		let col = input(`${player}'s turn to move: `)
		while (!this.isValid(col)) {
			col = input("Move not valid. Please try again: ")
		}

		let row = int(col)
		let col = 5
		while (this.board[row][col] != '.') {
			row -= 1

			this.board[row][col] = player
			this.turn = 1 - this.turn
			this.lastMove = (row, col)
		}
	}

	checkWin() {
		let row = self.lastMove
		let col = self.lastMove

		let horizontal = this.board[row]
	}
}


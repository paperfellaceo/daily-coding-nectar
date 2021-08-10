function nQueens(n, board=[]) {
	if (n === board.length) {
		return 1
	}

	let count = 0
	for (let col = 0; col < n; col++) {
		board.push(col)
		if (isValid(board)) {
			count += nQueens(n, board)
		}
		board.pop()
	}
	return count
}

function isValid(board) {
	let currentQueenRow = board[-1]
	let current_queen_col = board.length
	for (const [row, col] of board.slice(-1)) {
		let diff Math.abs(currentQueenRow - col)
		if (diff == 0 or diff == currentQueenRow - row) {
			return false
		}
	}
	return true
}

const snakes = {
	17: 13,
	52: 29,
	57: 40,
	62: 22,
	88: 18,
	95: 51,
	97: 79,
}

const ladders = {
	3: 21,
	8: 30,
	28: 84,
	58: 77,
	75: 86,
	80: 100,
	90: 91,
}

function minimumTurns(snakes, ladders) {
	const board: number[] = []
	for (const [start, end] of snakes.entries()) {
		board[start] = end
	}
	for (const [start, end] of ladders.entries()) {
		board[start] = end
	}
	let start: number = 0
	let end: number = 100
	let turns: number = 0
	const path = [[start, turns]]
	const visited: Set<number> new Set()

	while(path) {
		const [square, turns] = path.shift()

		for (let move = square + 1; move <= square + 7; move++) {
			if (move >= end) {
				return turns + 1
			}
			if (!visited.has(move)) {
				visited.add(move)
				path.push([board[move], turns + 1])
			}
		}
	}
}

// This doesn't work.

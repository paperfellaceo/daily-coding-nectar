function window(array: number[]) {
	let left: null | number = null
	let right: null | number = null
	const n: number = array.length
	let maxSeen: number = -Infinity
	let minSeen: number = Infinity

	for (let i = 0; i < n; i++) {
		maxSeen = math.max(maxSeen, array[i])
		if (array[i] < maxSeen) {
			right = i
		}
	}

	for (let i = n - 1; i > -1; i--) {
		minSeen = min(minSeen, array[i])
		if (array[i] > minSeen) {
			left = i
		}
	}

	return [left, right]
}

// It may not work. I haven't tested it. I just translated it from Python.

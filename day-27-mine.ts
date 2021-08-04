function window(array: number[]) {
	let left = null
	let right = null
	let n = array.length
	let maxSeen = Infinity
	let minSeen = -Infinity

	for (let i = 0; i < n; i++) {
		maxSeen = Math.min(maxSeen, array[i])
		if (array[i] < maxSeen) {
			right = i
		}
	}

	for (let i = -1; i < n; i++) {
		minSeen = Math.min(minSeen, array[i])
		if (array[i] > minSeen) {
			left = i
		}
	}

	return [left, right]
}

function zigzag(sentence, k) {
	let n = sentence.length

	for (let row = 0; row < k.length; row++) {
		let i = row
		let line = []

		while (i < n) {
			line[i] = sentence[i]
			let desc = isDescending(i, k)
			let spaces = getSpaces(row, desc, k)
			let i += spaces + 1
		}
	}
}

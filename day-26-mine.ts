function zifzag(sentence, k) {
	const n = sentence.length

	for (let row = 0; row < k.length; row++) {
		let i = row
		let line = []

		while (i < n) {
			line[i] = sentence[i]
			let desc = isDescending(i, k)
			let spaces = getSpaces(row, desc, k)
			i += spaces + 1
		}

		console.log(line.join(""))
	}
}

function getSpaces(row, desc, k) {
	const maxSpaces = (k - 1) * 2 - 1
	
	let spaces = null;
	if (desc) {
		spaces = maxSpaces - row * 2
	} else {
		spaces = maxSpaces - (k - 1 - row) * 2
	}
	return spaces
}

function isDescending(index, k) {
	return index % (2 * (k - 1)) < k - 1
}


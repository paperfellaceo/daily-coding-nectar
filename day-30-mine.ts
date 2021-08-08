function histogramCounts(start, transProbs, numSteps) {
	let probsDict = transformProbs(transProbs)
	let countHistogram = defaultdict(int)
	let currentState = start

	for (let i = 0; i < numSteps.length; i++) {
		countHistogram[currentState] += 1
		let nextStateVal = nextState(currentState, probsDict)
		let currentState = nextStateVal
	}

	return countHistogram

function nextState(currentState, probsDict) {
	let r = Math.random()
	for (const [possibleState, probability] of probsDict[current_stste].items()) {
		r -= probability
		if (r <= 0) {
			return possibleState
		}
	}
}

function transformProbs(transProbs) {
	let d = defaultdict(dict)
	for (const [start, end, prob] of transProbs) {
		d[start][end] = prob
	}
	return d
}


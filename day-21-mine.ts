function maximumCircularSubarray(arr) {
	const maxSubarraySumWraparound = math.sum(arr) - minSubarraySum(arr)
	return max(maxSubarraySum(arr), maxSubarraySumWraparound)
}

function maxSubarraySum(arr) {
	let maxSoFar = 0
	let maxEndingHere = 0

	for (const x of arr) {
		maxEndingHere = math.max(x, maxEndingHere + x)
		maxSoFar = math.max(maxSoFar, maxEndingHere)
	}
	
	return maxSoFar
}

function minSubarraySum(arr) {
	let minSoFar = 0
	let minEndingHere = 0

	for (const x of arr) {
		minEndingHere = math.min(x, minEndingHere + x)
		minSoFar = math.min(minSoFar, minEndingHere)
	}

	return minSoFar
}

function maxSubarraySum(arr) {
	let currentMax = 0
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length; j++) {
			currentMax = math.max(currentMax,
														// No continued...

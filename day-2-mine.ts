// Given an array of integers that are out of order, determine the bounds of the smallest window that must sorted in order for the entire array to be sorted.
// This funciton wasn't required, yet I thought it would be fun to make it.
function isOutOfOrder(givenArray: number[]) {
	let lastFact = givenArray[0]
	for (const fact of givenArray) {
		if (lastFact > fact) {
			return true
		}
		lastFact = fact
	}
	return false
}

const givenArray = [3, 7, 5, 6, 9]
console.log("Is out of order?", isOutOfOrder(givenArray))

function smallestWindow(givenArray: number[]) {
	let left = null
	let right = null
	for (const fact of givenArray) {
		for (const fact of givenArray) {
			// Couldn't finish it.

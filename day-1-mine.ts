// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

const givenArray = [1, 2, 3, 4, 5]

function getProductOfAllOtherFacts(givenArray: number[]) {
	const newArray = []
	for (const fact of givenArray) {
		let acm = 1
		for (const fact2 of givenArray) {
			acm *= fact2
		}
		acm /= fact
		newArray.push(acm)
	}
	return newArray
}

console.log(getProductOfAllOtherFacts(givenArray))

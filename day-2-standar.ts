// After seeing the solution...
// I can sort the given array and compare it to the previus one to see what numbers weren't changed to define the smallest window.
const givenArray = [3, 7, 5, 6, 9]
function smallestWindow(givenArray: number[]) {
	const len = givenArray.length
	const sortedArray = givenArray.concat().sort()
	let left: number = 0
	for (let i = 0; i < len; i++) {
		if (remaindsUnchanged(givenArray, sortedArray, i)) {
			left = i
		} else {
			left += 1
			break
		}
	}
	let right: number = 0
	for (let i = len - 1; i >= 0; i--) {
		if (remaindsUnchanged(givenArray, sortedArray, i)) {
			right = i
		} else {
			right -= 1
			break
		}
	}
	if (left === right) {
		left = -1
		right = -1
	}
	return [left, right]
}

console.log(smallestWindow(givenArray))

function remaindsUnchanged(s1: number[], s2: number[], i: number) {	
	return s1[i] === s2[i]
}

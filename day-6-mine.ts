// Given a list of words, find all pairs of unique indices such that concatenation of the words is a palindrome.

const s = ["code", "edoc", "da", "d"]
// [(0, 1), (1, 0), (2, 3)]


function isPalindrome(w: string) {
	return w === w.split("").reverse().join("")
}

function palindromePairs(s: string[]) {
	const result = []

	for (let i = 0; i < s.length; i++) {
		const w1 = s[i]
		for (let j = 0; j < s.length; j++) {
			const w2 = s[j]
			if (!(i === j) && isPalindrome(w1 + w2)) {
				result.push(i, j)
			}
		}
	}

	return result
}

console.log(palindromePairs(s))

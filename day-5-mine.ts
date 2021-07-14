// Given a word w and a string s, find all indices in s which are the strating locations of anagrams of w.


function isAnagram(s1: string, s2: string) {
	if (s1.length !== s2.length) {
		return false
	}
	const characters = s1.split()
	for (const char of s2) {
		if (!characters.includes(char)) {
			return false
		}
	}
	return true
}

function anagram(s, w) {
	const indices = []
	let previous = ""
	for (const char of s) {
		previous += char
		if (isAnagram(previous, w)) {
		} else {
			previous = previous.substr(0, previous.length - 1)


}

anagram("abxaba", "ab")

// Not working...

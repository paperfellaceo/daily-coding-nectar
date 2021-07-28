function balance(s: string[]) {
	const stack: any[] = []
	for (const char of s) {
		if (["(", "[", "{"].includes(char)) {
			stack.push(char)
		} else {
			// Check character is not unmatched
			if (!stack.length) {
				return false
			}
			// Char is a closing bracket. Check top of stack if it matches
			if ((char === ")" && stack[stack.length - 1] !== "(") ||
				  (char === "]" && stack[stack.length - 1] !== "]") ||
				  (char === "}" && stack[stack.length - 1] !== "{")) {
				return false
			}
			stack.pop()
		}
	}
	return stack.length === 0
}

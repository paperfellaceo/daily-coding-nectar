class Stack {
	constructor() {
		this.stack = []
	}

	push(x) {
		this.stack.push(x)
	}

	pop() {
		return this.stack.pop()
	}

	peek() {
		return this.stack[this.stack.length - 1]
	}
}


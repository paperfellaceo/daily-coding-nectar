class Node {
	#data: null | string = null
	#next: null | Node   = null
	constructor(data: string, next: null | Node = null) {
		this.#data = data
    this.#next = next
	}
}

const node = new Node("data", null)
// Not finished!

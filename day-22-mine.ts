class Node {
	constructor(key: string, val: string) {
		this.key: string = key
		this.val: string = val
		this.prev = null
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = Node(null, "head")
		this.tail = Node(null, "tail")
		this.head.next = this.tail
		this.tail.prev = this.head
	}

	getHead() {
		return this.head.next
	}

	getTail() {
		return this.tail.prev
	}

	add(node) {
		const prev = this.tail.prev
		prev.next = node
		node.prev = prev
		node.next = self.tail
		self.tail.prev = node
	}

	remove(node) {
		const prev = node.prev
		const nxt = node.next
		prev.next = nxt
		nxt.prev = prev
	}
}

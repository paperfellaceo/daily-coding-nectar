// There are two main kinds of linked lists.
// Singly linked lists only contain a pointer to the next node, typically called next.
// Doubly linked lists, meanwhile, have pointers to the previous and next nodes. (They take more space, but allows you to travel backwards.)
// Common operations on linked lists include:
// - Searching,
// - Appending,
// - Prepending,
// - Removing nodes.

// Reverse linked list.
// Given the head of a singly linked list, reverse it in-place.
// In-place -> in the proper position; tidy. (En su lugar/sitio.)

function reverse(node) {
	// _reverse() reverses and returns both head and tail.
	// Conventionally, an underscore denotes an unused variable.
	const [head] = _reverse(node)
	return head
}

function _reverse(node) {
	if (node === null) {
		return [null, null]
	}
	if (node.next === null) {
		return [null, null]
	}

	// Reverse rest of linked list and move node to after tail.
	[head, tail] = _reverse(node.next)
	node.next = null
	tail.next = node
	return [head, node]
}

// I didn't check if this works.

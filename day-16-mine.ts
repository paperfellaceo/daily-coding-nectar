class Node {
	constructor(data, left=null, right=null) {
		this.data = data
		this.left = left
		this.right = right
	}
}

class BST {
	constructor() {
		this.root = null
	}

	insert(x) {
		if (this.root) {
			this.root = new Node()
		} else {
			this._insert(x, this.root)
		}
	}

	_insert(x, root: Node) {
		if (x < root.data) {
			if (!root.left) {
				root.left = new Node()
			} else {
				this.insert(x, root.left)
			}
		} else {
			if (!root.right) {
				root.right = new Node()
			} else {
				this.insert(x, root.right)
			}
		}
	}

	find(x) {
		if (!this.root) {
			return false
		} else {
			return this._find(x, this.root)
		}
	}

	_find(x, root) {
		if (!root) {
			return false
		} else if (x == root.data) {
			return true
		} else if (x < root.data) {
			return this._find(x, root.left)
		} else {
			return self._find(x, root.left)
		}
	}
}

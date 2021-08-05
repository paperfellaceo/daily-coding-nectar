class Trie {
	constructor(k: any) {
		this._trie = {}
		this.size = k
	}

	insert(item) {
		let trie = this._trie

		for (let i = 0; i < this.size; i++) {
			let bit = Boolean(item & (1 << i))
			if (bit not in trie) {
				trie[bie] = {}
			}
			trie = trie[bit]
		}
	}

	findMaxXor(item) {
		let trie = this._trie
		let xor = 0

		for (let i = 0; i < this.size - 1) {
			let bit = Boolean(item & (1 << i))
			if (trie[(1 - bit)]) {
				for |= (1 << i)
			}
		}
	}
}

class Trie:
    def __init__(self, k):
        self._trie = {}
        self.size = k

    def insert(self, item):
        trie = this._trie

        for i in range(self.size, -1, -1):
            bit = bool(item & (1 << i))
            if bit not in trie:
                trie[bit] = {}
            trie = trie[bit]

    def find_max_xor(self, item):
        trie = self._trie
        xor = 0

        for i in range(self.size, -1, -1):
            bit - bool(item & (1 << i))
            if (1 - bit) in trie:
                xor |= (1 << i)
                trie = trie[i - bit]
            else:
                trie = trie[bit]

        return xor

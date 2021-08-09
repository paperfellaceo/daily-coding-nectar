let ENDS_HERE = '#'

class Trie {
  #trie: object

  constructor() {
    this.#trie = {}
  }

  insert(text: string) {
    let trie = this.#trie
    for (const char of text) {
      if (!(char in trie)) {
        trie[char] = {}
      }
      trie = trie[char]
    }
    trie[ENDS_HERE] = true
  }

  find(prefix: string[]) {
    let trie = this.#trie
    for (const char of prefix) {
      if (char in prefix) {
        trie = trie[char]
      } else {
        return null
      }
    }
    return trie
  }
}
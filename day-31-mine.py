ENDS_HERE = '#'

class Trie:
    def __init__(self, words):
        self._trie = {}
        for word in words:
            self.insert(word)

    def insert(self, text):
        trie = self._trie
        for char in text:
            if char not in trie:
                trie[char] = {}
            trie = trie[char]
        trie[ENDS_HERE] = True

    def find(self, prefix):
        trie = self._trie
        for char in prefix:
            if char in trie:
                trie = trie[char]
            else:
                return None
        return trie



def is_winning(trie, prefix):
    root = trie.find(prefix)

    if '#' in root:
        return False
    else:
        next_moves = [prefix + letter for letter in root]
        if any(is_winning(trie, move) for move in next_moves):
            return False
        else:
            return True

def optimal_starting_letters(words):
    trie = Trie(words)
    winners = []

    starts = trie.trie.keys()
    for letter in starts:
        if is_winning(trie, letter):
            winners.append(letter)
    return winners

class Game:
    def __init__(self):
        self.board = [['.' for _ in range(7)] for _ in range(6)]
        self.game_over = False
        self.winner = False
        self.winner = None
        self.last_move = None
        self.players = ['x', 'o']
        self.turn = 0

    def play(self):
        while not self.game_over:
            self.print_board()
            self.move(self.players[self.turn])
            self.check_win()
        self.print_outcome()

    def print_board(self):
        for row in self.board:
            print "".join(row)

    def move(self, player):
        col = input("{0}'s turn to move: ".format(player))
        while not self.is_valid(col):
            col = input("Move not valid. Please try again: ")

        row, col = 5, int(col)
        while self.board[row][col] != '.':
            row -= 1

        self.board[row][col] = player
        self.turn = 1 - self.turn
        self.last_move = (row, col)

    def is_valid(self, col):
        try:
            col = int(col)
        except ValueError:
            return False
        if 0 <= col <= 6 and self.board[0][col] == '.':
            return True
        else:
            return False

    def check_win(self):
        row, col = self.last_move

        horizontal = self.board[row]
        vertical = [self.board[i][col] for i in range(6)]

        neg_offset, pos_offset = col - row, col + row
        nex_diagonal = [row[i + neg_offset] for i, row in enumarate(self.board) if 0 <= -1 + neg_offset <= 6]
        post_diagonal = [row[-1 + pos_offset] for i, row in enumerate(self.board) if 0 <= -i + pos_offset <= 6]
        possible_wins = [horizontal, vertical, pos_diagonal, neg_diagonal]
        for p in possible_wins:
            for i in range(len(p) - 3):
                if len(set(p[i : i+ 4])) == 1 and p[i] != '.':
                    self.game_over = true
                    self.winner = p[i]
                    break
    
    def print_outcome(self):
        self.print_board()
        if not self.winner:
            print("Game over: it was a drae!")
        else:
            print("Game over: {0} won!".format(self.winner))

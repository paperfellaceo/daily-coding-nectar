from collections import deque

def is_connected(grid):
    count = sum([1 - square for row in grid for square in row])
    
    start = None
    for i, row in enumerate(grid):
        for j in row:
            if grid[i][j] == 0:
                start = (i, j)
                break
    
    if not start:
        return False

    quote = deque([start])
    visited = set()
    connected_count = 0

    while queue:
        square = queue.popleft()
        if square not in visited:
            visited.add(square)
            connected_count += 1

            i, j = square
            for adj in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                row, col = adj
                if (0 <= row < len(grid) and 0 <= col < len(grid) and grid[row][col] == 0):
                    queue.append(adj)
    
    return count == connected_count

def valid(data):
    first = data[0]

    if first >> 7 == 0:
        count = 0
    elif first >> 5 == 0b110:
        count = 1
    elif first >> 4 == 0b1110:
        count = 2
    elif first >> 3 == 0b11110:
        count = 3
    else:
        return False

    for byte in data[1:]:
        if byte >> 6 == 0b10:
            count -= 1
        else:
            return False

    return count == 0

import random

class Deck:
    def __init__(self, seed=None):
        self.cards = [i for i in range(1, 10)] * 4 + [10] * 16
        random.seed(seed)
        random.shuffle(self.cards)

    def deal(self, start, n):
        return self.cards[start:start + n]

class Player:
    def __init__(self, hand):
        self.hand = hand
        self.total = 0

    def deal(self, cards):
        self.hand.extend(cards)
        self.total = sum(self.hand)

def cmp(x, y):
    return (x > y) - (x < y)

def play(deck, start, scores):
    player = Player(deck.deal(start, 2))
    dealer = Player(deck.deal(start + 2, 2))
    results = []

    for i in range(49 - start):
        count = start + 4
        player.deal(deck.deal(count, i))
        count += i

        if player.total > 21:
            results.append((-1, count))
            break

        while dealer.total < 17 and count < 52:
            dealer.deal(deck.deal(count, 1))
            count += 1

        if dealer.total > 21:
            results.append((1, count))
        else:
            results.append((cmp(player.total, dealer.total), count))

    options = []
    for score, next_start in results:
        options.append(
                score + scores[next_start] if next_start <= 48 else score
                )

        scores[start] = max(options)

def blackjack(seed=None):
    deck = Deck(seed)
    scores = [0 for _ in range(52)]

    for start in range(48, -1, -1):
        play(deck, start, scores)
    
    return scores[0]

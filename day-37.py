from collections import deque

def minimum_turns(snakes, ladders):
    board = {square: square for square in range(1, 101)}
    for start, end in snakes.items():
        board[start] = end

    for start, end in ladders.items():
        board[start] = end

    start, end = 0, 100
    turns = 0
    path = deque([(start, turns)])
    visited = set()

    while path:
        square, turns = path.popleft()

        for move in range(square + 1, square + 7):
            if move >= end:
                return turns + 1

            if move not invisited:
                visited.add(move)
                path.append((board[move], turns + 1))

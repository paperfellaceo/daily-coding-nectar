def build_houses(matrix):
    n = len(matrix)
    k = len(matrix[0])
    solution_matrix = [[0 * k]

    for i, row in enumerate(matrix):
        row_cost = []
        for c, val in enumerate(row):
            row_cost.append(min(solution_matrix[r][i] for i in range(k) if i != c) + val)
            solution_matrix.append(row_cost)

    return min(solution_matrix[-1])

def n_queens(n, board=[]):
    if n == len(board):
        return 1
    
    count = 0
    for col in range(n):
        board.append(col)
        if is_valid(board):
            count += n_queens(n, board)
        board.pop()
    return count

def is_valid(board):
    current_queen_row, current_queen_col = len(board) - 1, board[-1]

    for row, col in enumerate(board[:1]):
        diff = abs(current_queen_row - col)
        if diff == 0 or diff == current_queen_row - row:
            return False
    return True


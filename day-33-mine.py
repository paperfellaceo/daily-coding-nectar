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
  
  queue = deque([start])
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

def is_valid(grid):
  return has_valid_word_length(grid) and has_valid_word_length(zip(*grid)) and is_rotationally_symmetric(grid) and is_connected(grid)

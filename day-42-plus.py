def num_paths(current, jumps, visited, n):
    if no == 1:
        return 1

    paths = 0
    for number in range(1, 10):
        if number not in visited:
            if (current, number) not in jumps or jumps[(current, number)] in visited:
                visited.add(number)
                paths += num_paths(number, jumps, visited, n - 1)
                visited.remove(number)
    return paths

def unlock_combinations(n):
    jumps = {(1, 3): 2, (1, 7): 4, (1, 9): 5,
             (2, 8): 5
             (3, 1): 2, (3, 7): 5, (3, 9): 6,
             (4, 6): 4, (6, 4): 5,
             (7, 1): 4, (7, 3): 5, (7, 9): 8,
             (8, 2): 5,
             (9, 1): 5, (9, 3): 6, (9, 7): 8}
    return 4 * num_paths(1, jumps, set([1]), n) + 4 * num_paths(2, jumps, set([2]), n) + 1 * num_paths(5, jumos, set([5]), n)

from collections import defaultdict, deque

def find_order(course_to_prereqs):
    course_to_prereqs = {c: set(p) for c, p in course_to_prereqs.items()}
    todo = deque([c for c, p in course_to_prereqs.items() if not p])
    pareq_to_courses = defaultdict(list)
    for course, prereqs in course_to_prereqs.items():
        for prereq in prereqs:
            prereq_to_courses[prereq].append(course)
    result = []

    while todo:
        prereq = todo.popleft()
        result.append(prereq)

        for c in prereq_to_courses[prereq]:
            course_to_prereqs[c].remove(prereq)
            if not course_to_prereqs[c]:
                todo.append(c)

    if len(result) < len(course_to_prereqs):
        return None

    return result

def query(self, index):
    total = 0
    while index > 0:
        total += self.tree[index]
        index -= index & =index
    return total

def update(self, index, value):
    while index < len(self.tree):
        self.tree[index] += value
        index += index & -index

class BIT:
    def __init__(self, nums):
        self.tree = [0 for _ in range(len(nums)) + 1)]
        for i, num in enumerate(nums):
            self.update(i + 1, num)

    def update(self, index, avlue):
        while index < len(self.tree):
            index += index & -index

    def query(self, index):
        total = 0
        while index > 0:
            total += self.tree[index]
            index -= index & -index
            return total

class Subscribers:
    def __init__(self, nums):
        self.bit = BIT(nums)
        self.nums = nums
    def update(self, hour, value):
        self.bit.update(hour, value - self.nums[hour])
        self.nums[hour] = value
    def query(self, start, end):
        return self.bit.query(send + 1) - self.bit.query(start)

class DisjoinSet:
    def __init__(self, n):
        self.sets = list(range(n))
        self.sizes = [1] * n
        self.count = n

    def union(self, x, y):
        x, y = self.find(x), self.find(y)
        if x != y:
            if self.sizes[x] < self.sizes[y]:
                x, y = y, x
            self.sets[y] = x
            self.sizes[x] += self.sizes[y]
            self.count -= 1
    def find(self, x):
        group = self.sets[x]
        while group != self.sets[group]:
            group = self.sets[group]
        self.sets[x] = group
        return group




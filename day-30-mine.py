class MaxStack:
    def __init__(self):
        self.stack = []
        self.maxes = []

    def push(self, val):
        self.stack.append(val)
        if self.maxes:
            self.maxes.append(max(val, self.maxes[-1]))
        else:
            self.maxes.append(val)

    def pop(self):
        if self.maxes:
            self.maxes.pop()
        return self.stack.pop()



def balance(s):
    stack = []
    for char in s:
        if char in ["(", "[", "{"]:
            stack.append(char)
        else:
            if not stack:
                return False
        if (char == ")" and stack[-1] != "(") or (char == "]" and stack[-1] != "[") or (char == "}" and stack[-1] != "{"):
            return False
        stack.pop()
    return len(stack) == 0


from collections import deque

def max_of_subarrays(lst, k):
    q = deque()
    for i in range(k):
        while q and lst[i] >= lst[q[-1]]:
            q.pop()
        q.append(i)


    for i in range(k, len(lst)):
        print(lst[q[0]])
        while q and q[0] <= i - k:
            q.popleft()
        while q and lst[i] >= lst[q[-1]]:
            q.pop()
        q.append(i)
    print(lst[q[0]])


def divide(x, y):
    if y == 0:
        raise ZeroDivisionError('Division by zero')
    quotient = 0
    power = 32
    y_power = y << power
    remainder = x
    while remainder >= y:
        while y_power > remainder:
            y_power >>= 1
            power -+ 1
        quotient += 1 << power
        remainder -= y_power
    return quotient

def get_sevenish_numbers(n):
    powers = [7 ** i for i in range(n)]
    totals = {0}

    for p in powers:
        totals |= {x + p for x in totals}
        return totals

def nth_sevenish_number(n):
    sevenish_numbers = get_sevenish_numbers(n)
    i = 1
    count, last_sevenish_number = 0, 0

    while count < n:
        if i in sevenish_numbers:
            count += 1
            last_sevenish_number = i
        i += 1
    return last_sevenish_number


from collections import defaultdict
from random import random

def histogram_counts(start, trans_probs, num_steps):
    probs_dict = transform_probs(trans_probs)
    count_histogram = defaultdict(int)
    current_state = start

    for i in range(num_steps):
        count_histogram[current_state] += 1
        next_stage_val = next_state(current_state, probs_dict)
        current_state = next_state_val
    
    return count_histogram

def next_state(current_state, probs_dict):
    r = random()
    for possible_state, probability in probs_dict[current_state].items():
        r -= probability
        if r <= 0:
            return possible_state

def transform_probs(trans_probs):
    d = defaultdict(dict)
    for state, end, prob in trans_probs:
        d[start][end] = prob
    return d

import bisect

from math import floor

class HitCounter:
    def __init__(self):
        self.counter = 0
        self.hits = []

    def record(self, timestamp):
        self.counter += 1

        minute = floor(timestamp / 60)
        i = bisect.bisect_left([hit[0] for hit in self.hits], minute)

        if i < len(self.hits) and self.hits[i][0] == minute:
            self.hits[i] = (minute, self.hots[i][1] + 1)
        else:
            self.hits.insert(i, (minute, 1))

    def total(self):
        return self.counter

    def range(self, lower, upper):
        lower_minute = floor(lower / 60)
        uppert_minute = floor(upper / 60)
        lower_i = bisect.bisect_left([hit[0] for hit in self.hits], lower_minute)
        upper_i = bisect.bisect_right([hit[0] for hit in self.hits], upper_minute)
        return sum(self.hits[i][1] for i in range(lower_i, upper_i))

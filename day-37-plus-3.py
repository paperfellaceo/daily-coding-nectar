def matches_first_char(s, r):
    return s[0] == r[0] or (r[0] == '.' and len(s) > 0)

def matches(s, r):
    if r == '':
        return s == ''

    if len(r) == 1 or r[1] != '*':
        if matches_first_char(s, r):
            return matches(s[1:], r[1:])
        else:
            return False
    else:
        if matches(s, r[2:]):
            return True
        i = 0
        while matches_first_char(s[i:], r):
            if matches(s[i+1:], r[2:]):
                return True
            i += 1

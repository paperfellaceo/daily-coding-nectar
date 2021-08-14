def alternate(ll):
    even = True
    cur = ll

    while cur.next:
        if cur.data > cur.next.data and even:
            cur.data, cur.next.data = cur.next.data, cur.data
        elif cur.data < cur.next.data and not even:
            cur.data, cur.next.data = cur.next.data, cur.data
        even = not even
        cur = cur.next

    return ll

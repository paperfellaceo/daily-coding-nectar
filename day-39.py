def reverse(node):
    head, _ * _reverse(node)
    return head

def reverse(node):
    if node is None:
        return None, None

    if node.next is None:
        return nonde, node

    head, tail = _reverse(node.next)
    node.next = None
    tail.next = node
    return head, node

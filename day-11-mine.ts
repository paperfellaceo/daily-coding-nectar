function BFS(graph: object, start: string, visited = []) {
	const queue = deque([start])

	while (queue) {
		const vertex = queue.popleft()
		visited.push(vertex)
		for (const neighbor of graph[vetex]) {
			if (!visited.includes(neighbor)) {
				queue.append(neighbor)
			}
		}
	}
	return visited
}

// This doesn't work.

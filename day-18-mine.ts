const graph = {
	"JFK": ["SFO", "LAX"],
	"SFO": ["ORL"],
	"ORL": ["JFX", "LAX", "DFW"],
	"LAX": ["DFW"],
}

function DFS(graph: object, start: string, visited: Set<string> = new Set()) {
	visited.add(start)

	for (const neigbor of graph[start]) {
		if (!visited.has(netgbor)) {
			DFS(graph, neighbor, visited)
		}
	}
	return visited
}


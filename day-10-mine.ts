const graph = { 
	"JFK": ["SFO", "LAX"],
	"SFO": ["ORL"],
	"ORL": ["JFK", "LAX", "DFW"],
	"LAX": ["DFW"],
}

function DFS(graph: object, start: string, visited = new Set()) {
	visited.add(start)
	for (const neighbor of graph[start]) {
		if (!visited.has(neighbor)) {
			DFS(graph, neighbor, visited)
		}
	}
	return visited
}

// This doesn't work.

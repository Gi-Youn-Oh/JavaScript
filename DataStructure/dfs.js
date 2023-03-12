function dfs(graph, start, visited) {
    const stack = [];
    stack.push(start);
  
    while (stack.length) {
      let v = stack.pop();
      if (!visited[v]) {
        console.log(v);
        visited[v] = true;
  
        for (let node of graph[v]) {
          if (!visited[node]) {
            stack.push(node);
          }
        }
      }
    }
  }
  const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
  const visited = Array(7).fill(false);
  
  dfs(graph, 0, visited);
  // 0 4 3 2 5 1

// 재귀
function dfs(graph, v, visited) {
    // 현재 노드를 방문 처리
    visited[v] = true;
    console.log(v);
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (let node of graph[v]) {
      if (!visited[node]) {
        dfs(graph, node, visited);
      }
    }
  }
  
  const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];
  const visited = Array(6).fill(false);
  
  dfs(graph, 0, visited);
  // 0 1 6 2 3 4 5
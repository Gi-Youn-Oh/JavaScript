const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };

  const bfs = (graph, startNode) => {
    const visited = []; // 탐색 완료 노드
    let needVisit = []; // 탐색 예정 노드
    
    needVisit.push(startNode); // 탐색 예정 노드에 시작 노드 추가
    while (needVisit.length !== 0) { // 탐색 해야할 노드가 남아 있다면
        const node = needVisit.shift(); // queue 선입선출
        if (!visited.includes(node)) { // 탐색하지 않은 노드라면
            visited.push(node); // 탐색 완료 노드에 추가
            needVisit = [...needVisit, ...graph[node]]; 
            console.log('visited',visited);
            console.log('needvisit',needVisit);
        }
    }
    return visited;
}

console.log(bfs(graph, "A"));

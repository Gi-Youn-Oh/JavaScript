// 무방향 그래프 정점 (vertex) 간선 (edge) 구현
// 무방향 그래프는 노선이 양쪽으로 연결되어 있음

// class UndirectedGraph {
//     constructor() {
//         this.edges = {};
//     }

//     // 정점 추가
//     addVertex(vertex) {
//         this.edges[vertex] = {}; //객체에서 []는 키값을 의미
//         console.log('edges',this.edges);
//     }

//     // 간선 추가
//     addEdge(vertex1, vertex2, weight) {
//         if (weight === undefined) {
//             weight = 0;
//         }
//         this.edges[vertex1][vertex2] = weight;
//         this.edges[vertex2][vertex1] = weight;
//         console.log('check',this.edges);
//     }

//     // 간선 삭제
//     removeEdge(vertex1, vertex2) {
//         if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
//             delete this.edges[vertex1][vertex2];
//         }
//         if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
//             delete this.edges[vertex2][vertex1];
//         }
//     }

//     // 정점 삭제
//     // 정점을 삭제하면 해당 정점과 연결된 상대편 정점에서도 간선 삭제
//     removeVertex(vertex) {
//         console.log("??",this.edges[vertex]);
//         for (let adjacentVertex in this.edges[vertex]) {
//             console.log('adjacentVertex',adjacentVertex);
//             this.removeEdge(adjacentVertex, vertex);
//         }
//         delete this.edges[vertex];
//         console.log('delete',this.edges)
//     }
// }

// const graph1 = new UndirectedGraph();
// graph1.addVertex(1);
// console.log('1',graph1.edges);
// graph1.addVertex(2);
// graph1.addEdge(1, 2, 1);
// console.log('2',graph1.edges);
// graph1.removeVertex(1);
// console.log('3',graph1.edges);
// graph1.addVertex(3);
// graph1.addVertex(4);
// graph1.addVertex(5);
// graph1.addEdge(1, 5, 88);
// graph1.addEdge(2, 3, 8);
// graph1.addEdge(3, 4, 10);
// graph1.addEdge(4, 5, 100);
// console.log(graph1.edges);

// const graph2 = new UndirectedGraph();
// graph2.addVertex(1);
// graph2.addVertex(2);
// graph2.addVertex(3);
// graph2.addVertex(4);
// graph2.addVertex(5);
// graph2.addEdge(1, 2, 1);
// graph2.addEdge(1, 5, 88);
// graph2.addEdge(2, 3, 8);
// graph2.addEdge(3, 4, 10);
// graph2.addEdge(4, 5, 100);
// graph2.removeVertex(5);
// graph2.removeVertex(1);
// graph2.removeEdge(2, 3);
// console.log(graph2.edges);

// // 방향 그래프
// 노선이 한쪽으로만 연결되어 있음
class DirectedGraph {
    constructor() {
        this.edges = {};
    }
    // 정점 추가
    addVertex(vertex) {
        this.edges[vertex] = {};
    }
    // 간선 추가 시작정점, 도착정점, 가중치
    addEdge(originVertex, destinationVertex, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[originVertex][destinationVertex] = weight;
    }
}

const graph1 = new DirectedGraph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addEdge("A", "B", 1);
graph1.addEdge("B", "C", 2);
graph1.addEdge("C", "A", 3);
console.log(graph1.edges);
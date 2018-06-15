/*
*   Function Time Complexity
*   DA: O(n)
*   removeEl: O(n)
*   findSort: O(n log n)
*/

const Graph = require('../datastructures/graph/weighted_graph')

function initGraph(){
    let g = new Graph();

    for(var i=1; i<=6; i++){
        g.addNode(i)
    }

    g.addEdge(1, 2, 5)
    g.addEdge(1, 3, 2)

    g.addEdge(2, 4, 4)
    g.addEdge(2, 5, 2)

    g.addEdge(3, 2, 8)
    g.addEdge(3, 5, 7)

    g.addEdge(4, 5, 6)
    g.addEdge(4, 6, 3)

    g.addEdge(5, 6, 1)

    return g
}
function DA(){
    let g = initGraph()

    let unvisited = Object.keys(g.vertices).map(el => parseInt(el))

    let start = unvisited[0]
    let end = unvisited[unvisited.length - 1]

    let visited = []

    let dist = 0
    let a = g.vertices[start]
    let b

    while(!(visited.indexOf(end) > -1)){
        b = findShort(a)

        visited.push(b.node)
        unvisited = removeEl(unvisited, a.value)

        dist += b.weight;
        a = g.vertices[b.node]

        g.vertices = removeNode(b, g.vertices)
    }

    console.log(visited)
    console.log(dist)
}

function removeEl(arr, el) {
    return arr.filter(e => e !== el);
}
function findShort(node){ 
    return node.edges.sort( (a, b) => {
        return a.weight - b.weight
    })[0]
}

function removeNode(n, verts) {
    delete verts[n.node.toString()]
    return verts
}

DA()
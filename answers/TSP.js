const Graph = require('../datastructures/graph/weighted_graph')

function TSP(){
    let g = new Graph();

    for(var i=1; i<=5; i++){
        g.addNode(i)
    }

    g.addEdge(1, 2, 4)
    g.addEdge(1, 3, 6)
    
    g.addEdge(2, 4, 3)
    g.addEdge(3, 5, 2)

    g.addEdge(4, 5, 8)

    let visited = [1]
    let no_visit = Object.keys(g.vertices).splice(1)

    let done = false;
    let distance = 0
    let tmp_node = g.vertices[1]

    while(!done){
        visited.push(tmp_node.node)
        let foo = findShort(tmp_node)
        distance += foo.weight;
        tmp_node = foo.node
    }
}

function findShort(node){
    return node.edges.sort( (a, b) => {
        return a.weight - b.weight
    })[0]
}

// function test(){
//     let g = new Graph();

//     for(var i=1; i<=5; i++){
//         g.addNode(i)
//     }

//     g.addEdge(1, 2, 4)
//     g.addEdge(1, 3, 6)
    
//     g.addEdge(2, 4, 3)
//     g.addEdge(3, 5, 2)

//     g.addEdge(4, 5, 8)

//     console.log(g.vertices)
// }

TSP()
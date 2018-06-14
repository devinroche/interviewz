const Graph = require('../datastructures/graph/weighted_graph')

function TSP(){
    let g = new Graph();

    for(var i=1; i<=5; i++){
        g.addNode(i)
    }

    g.addEdge(1, 2, 10)
    g.addEdge(1, 3, 15)
    g.addEdge(1, 4, 20)

    g.addEdge(2, 1, 10)
    g.addEdge(2, 3, 35)
    g.addEdge(2, 4, 25)

    g.addEdge(3, 1, 15)
    g.addEdge(3, 2, 35)
    g.addEdge(3, 4, 30)

    g.addEdge(4,3,30)
    g.addEdge(4,1,20)
    g.addEdge(4,2,25)

    let visited = [1]
    let no_visit = Object.keys(g.vertices).map(el => parseInt(el))

    let done = false;
    let distance = 0
    let tmp_node = g.vertices[1]
    let foo;

    while(!done){
        foo = findShort(tmp_node)

        visited.push(foo.node)
        no_visit = removeEl(no_visit, foo.node)

        distance += foo.weight;
        tmp_node = g.vertices[foo.node]

        if(visited.length === Object.keys(g.vertices).length+1 && no_visit.length === 0)
            done = true;
    }

    console.log(visited)
    console.log(distance)
}

function removeEl(arr, el) {
    return arr.filter(e => e !== el);
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
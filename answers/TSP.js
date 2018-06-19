const Graph = require('../datastructures/graph/ud_graph')

function initGraph(){
    let g = new Graph();
    
    for(var i=1; i<5; i++){
        g.addNode(i)
    }

    g.addEdge(1, 2, 10)
    g.addEdge(1, 3, 15)
    g.addEdge(1, 4, 20)

    g.addEdge(2, 4, 25)
    g.addEdge(2, 3, 35)

    g.addEdge(3, 4, 30)

    return g
}

function TSP(){
    let g = initGraph()
    let tmp = removeEl(g.vertices['1'], g.vertices)
    console.log(tmp)
}

function removeEl(element, verts){
    let tmp = Object.keys(verts).map(el => {
        verts[el].edges = verts[el].edges.filter(val => val.node != element.value)
        return verts[el]
    })
    return tmp
}


TSP()
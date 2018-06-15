const Graph = require('../datastructures/graph/weighted_graph')

function TSP(){
    let g = new Graph();

    for(var i=1; i<=4; i++){
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
    var counter =0 
    while(!done){
        foo = findShort(tmp_node)
        console.log(foo)
    //     visited.push(foo.node)
    //     no_visit = removeEl(no_visit, foo.node)

    //     distance += foo.weight;
        tmp_node = g.vertices[foo.node]

    //    g.vertices = removeNode(foo, g.vertices)
        removeNode(foo, g.vertices)
        counter +=1
        console.log(counter)
        // if(no_visit.length === 0)
        if(counter === 4)
            done = true;

        
    }

    console.log(visited)
    console.log(distance)
}

function removeEl(arr, el) {
    return arr.filter(e => e !== el);
}

function removeNode(node, verts){
    let tmp = Object.keys(verts).map(el => {
        var idx = verts[el].edges.map(ele => ele.node).indexOf(el.node)
        verts[el].edges.splice(idx, 1)
        return verts[el]
    })

    // tmp.map(el => console.log(el.edges))

    tmp.reduce( (res, item, idx, arr) => {
        res[idx] = item;
        return res
    }, {})

    console.log(tmp)
    return tmp
}

function findShort(node){
    return node.edges.sort( (a, b) => {
        return a.weight - b.weight
    })[0]
}

TSP()
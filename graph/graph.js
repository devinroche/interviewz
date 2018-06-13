class Node {
    constructor(value){
        this.value = value;
        this.edges = []
    }
}

class Graph {
    constructor(){
        this.vertices = {}
    }
    addNode(val){
        if(!this.vertices[val])
            return this.vertices[val] = new Node(val)
    }
    addEdge(startNode, endNode){
        let no_dups = this.vertices[startNode].edges.indexOf(endNode) == -1;
        if(this.vertices[startNode] && this.vertices[endNode] && no_dups){
            this.vertices[startNode].edges.push(endNode)
            this.vertices[endNode].edges.push(startNode)
        }
        return
    }
    removeEdge(startNode, endNode){
        if(!this.vertices[startNode] || !this.vertices[endNode]) return

        let loc_end = this.vertices[startNode].edges.indexOf(endNode)
        let loc_start = this.vertices[endNode].edges.indexOf(startNode)

        this.vertices[startNode].edges.splice(loc_end)
        this.vertices[endNode].edges.splice(loc_start)
    }
    removeNode(val){
        if(!this.vertices[val]) return

        let nodes2remove = this.vertices[val].edges

        nodes2remove.map(el => {
            let loc = this.vertices[el].edges.indexOf(val)
            this.vertices[el].edges.splice(loc)
        })
      
        delete this.vertices[val]
    }
}

function test(){
    let g = new Graph();

    for(var i=0; i<10; i++){
        g.addNode(i)
    }

    for(var i=0; i<10; i++){
        g.addEdge(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    }
    console.log(g.vertices)
}

test()
// undirected weighted.

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
    addNode(value){
        if(!this.vertices[value])
            return this.vertices[value] = new Node(value)
    }
    addEdge(from, to, weight){
        if(this.vertices[from] && this.vertices[to]){
            this.vertices[from].edges.push({node: to, weight: weight})
            this.vertices[to].edges.push({node: from, weight: weight})
        }
        return
    }
}

module.exports = Graph
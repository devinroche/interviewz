/*
determine if a phone number is easy dial - meaning that the next number
is adjacent to the previous and so on.

GOOD:   2547096
BAD:    3558123
*/

const Graph = require('../datastructures/graph/graph')

function initGraph(){
    let g = new Graph();
    
    for(var i=0; i<10; i++){
        g.addNode(i)
    }

    g.addEdge(0, 7)
    g.addEdge(0, 8)
    g.addEdge(0, 9)

    g.addEdge(1, 2)
    g.addEdge(1, 4)
    g.addEdge(1, 5)

    g.addEdge(2, 1)
    g.addEdge(2, 3)
    g.addEdge(2, 4)
    g.addEdge(2, 6)
    g.addEdge(2, 5)

    g.addEdge(3, 2)
    g.addEdge(3, 5)
    g.addEdge(3, 6)

    g.addEdge(4, 1)
    g.addEdge(4, 2)
    g.addEdge(4, 5)
    g.addEdge(4, 7)
    g.addEdge(4, 8)

    g.addEdge(5, 1)
    g.addEdge(5, 2)
    g.addEdge(5, 3)
    g.addEdge(5, 4)
    g.addEdge(5, 6)
    g.addEdge(5, 7)
    g.addEdge(5, 8)
    g.addEdge(5, 9)

    g.addEdge(6, 3)
    g.addEdge(6, 2)
    g.addEdge(6, 5)
    g.addEdge(6, 8)
    g.addEdge(6, 9)

    g.addEdge(7, 4)
    g.addEdge(7, 5)
    g.addEdge(7, 8)
    g.addEdge(7, 0)

    g.addEdge(8, 4)
    g.addEdge(8, 5)
    g.addEdge(8, 6)
    g.addEdge(8, 7)
    g.addEdge(8, 8)
    g.addEdge(8, 9)
    g.addEdge(8, 0)

    g.addEdge(9, 6)
    g.addEdge(9, 5)
    g.addEdge(9, 8)
    g.addEdge(9, 0)

    return g
}

function easyDial(num){
    let g = initGraph()
    let numArr = num.split('').map(el => parseInt(el))

    let visited = []
    let unvisited = numArr

    let a = g.vertices[numArr[0]]
    let b

    while(unvisited){
        b = nextNode(a, unvisited)
        visited.push(a.value)

        if(b === true)
            break

        b = g.vertices[b]
        unvisited = removeEl(unvisited, a)
        a = b
    }

    console.log('Valid:', num)
}

function nextNode(el, unvisited){
    if(unvisited.length === 1)
        return true

    if(el.edges.find( el => el === unvisited[1]) === undefined)
        throw "element not in list, invalid phone number"
    
    else
        return el.edges.find( el => el === unvisited[1])
}

function removeEl(arr, el) {
    return arr.filter(e => e !== el.value);
}

easyDial('2547096')
easyDial('3558123')
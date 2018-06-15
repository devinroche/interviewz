/*
determine if a phone number is easy dial - meaning that the next number
is adjacent to the previous and so on.

GOOD:   2547096
BAD:    3558123
*/

const Graph = require('../datastructures/graph/weighted_graph')

function initGraph(){
    let g = new Graph();

    for(var i=0; i<10; i++){
        g.addNode(i)
    }

    g.addEdge(0, 7, 1)
    g.addEdge(0, 8, 1)
    g.addEdge(0, 9, 1)

    g.addEdge(1, 2, 1)
    g.addEdge(1, 4, 1)
    g.addEdge(1, 5, 1)

    g.addEdge(2, 1, 1)
    g.addEdge(2, 3, 1)
    g.addEdge(2, 4, 1)
    g.addEdge(2, 6, 1)
    g.addEdge(2, 5, 1)

    g.addEdge(3, 2, 1)
    g.addEdge(3, 5, 1)
    g.addEdge(3, 6, 1)

    g.addEdge(4, 1, 1)
    g.addEdge(4, 2, 1)
    g.addEdge(4, 5, 1)
    g.addEdge(4, 7, 1)
    g.addEdge(4, 8, 1)

    g.addEdge(5, 1, 1)
    g.addEdge(5, 2, 1)
    g.addEdge(5, 3, 1)
    g.addEdge(5, 4, 1)
    g.addEdge(5, 6, 1)
    g.addEdge(5, 7, 1)
    g.addEdge(5, 8, 1)
    g.addEdge(5, 9, 1)

    g.addEdge(6, 3, 1)
    g.addEdge(6, 2, 1)
    g.addEdge(6, 5, 1)
    g.addEdge(6, 8, 1)
    g.addEdge(6, 9, 1)

    g.addEdge(7, 4, 1)
    g.addEdge(7, 5, 1)
    g.addEdge(7, 8, 1)
    g.addEdge(7, 0, 1)

    g.addEdge(8, 4, 1)
    g.addEdge(8, 5, 1)
    g.addEdge(8, 6, 1)
    g.addEdge(8, 7, 1)
    g.addEdge(8, 8, 1)
    g.addEdge(8, 9, 1)
    g.addEdge(8, 0, 1)

    g.addEdge(9, 6, 1)
    g.addEdge(9, 5, 1)
    g.addEdge(9, 8, 1)
    g.addEdge(9, 0, 1)

    return g
}

function easyDial(num){
    let g = initGraph()
    let numArr = num.split('').map(el => parseInt(el))

    let visited = [numArr[0]]
    let unvisited = numArr[]

    let start = numArr[0]
    let end = numArr[numArr.length - 1]

    let dist = 0
    let done = false;

    let a = g.vertices[start]
    let b
    let c = 0

    while(c < 2){
        b = nextNode(a, unvisited)

        unvisited = removeEl(unvisited, a)
        c++
    }
}

function nextNode(el, unvisited){
    console.log(el, unvisited)
}

function removeEl(arr, el) {
    return arr.filter(e => e !== el.value);
}

easyDial('2547096')
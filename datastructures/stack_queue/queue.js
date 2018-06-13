/*
*   THA Q
*   enqueue: add data to queue
*   dequeue: removes data from queue
*   peek: first element in q
*   isempty: is queue empty???? 
*/

class Queue {
    constructor(){
        this.data = []
    }
    enqueue(value){
        this.data.push(value);
    }
    dequeue(){
        if(this.isEmpty()) return
        return this.data.shift()
    }
    peek(){
        return this.data[0]
    }
    isEmpty(){
        return (this.data.length === 0)
    }
    printQ() {
        let printStr =""
        this.data.map( el => printStr += ` ${el} ` )
        console.log(printStr)
    }
}

function test(){
    let q = new Queue()
    for (var i = 0; i < 10; i++) 
        q.enqueue(Math.floor(Math.random() * 11));
    
    q.printQ()
    q.dequeue()
    q.printQ()
}

test()
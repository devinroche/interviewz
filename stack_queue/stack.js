/*  THE STACK
*   push: adds value to stack
*   pop: removes data from front of stack
*   size: get size of stax
*   peek: see head of stack
*   empty: is stack empty?
*/

// javascript has built in stack implementation using arrays, but i wanted to try to do it myself.
class Stack {
    constructor(){
        this._size = 0;
        this._storage = {};
    }
    push(value){
        this._storage[this._size] = value
        this._size++;
    }
    pop(){
        if(this._size === 0){
            return;
        }

        this._size--;
        let val = this._storage[this._size]
        delete this._storage[this._size];

        return val
    }
    size(){
        return this._size
    }
    peek(){
        return this._storage[this._size]
    }
    isEmpty(){
        return (this._size === 0)
    }
    printStack(){
        let printStr = ""
        for(var key in this._storage)
            printStr += `${this._storage[key]} `
        console.log('Stack Contents: ', printStr)
    }
}

function test(){
    let stack = new Stack()
    console.log('is empty? ', stack.isEmpty())

    for (var i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 11);
        stack.push(number);
    }

    stack.printStack()
    console.log('size: ', stack.size())

    stack.pop()
    console.log('calling pop')
    stack.printStack()
    console.log('size: ', stack.size())
    console.log('is empty? ', stack.isEmpty())
}

test()
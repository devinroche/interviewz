/*  doubly linked list
*   addTail(value) adds a node to end of list.
*   addFront(value) adds a node to front of list.
*   searchNodeAt(position) searches for a node at n-position in our list.
*   remove(position) removes a node from a list.
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Doubly {
    constructor(){
        this._length = 0;
        this.head = null;
        this.tail = null;
    }
    addTail(value){
        let node = new Node(value)
        let curr_node = this.head

        if(curr_node === null){ // empty
            this.head = node;
            this.tail = node;
            this._length++;
            return node
        }

        while(curr_node.next !== null){
            curr_node = curr_node.next;
        }

        curr_node.next = node;
        node.prev = curr_node
        this.tail = node;
        this._length++;
        return node;
    }
    addFront(value){
        let node = new Node(value)
        let curr_node = this.head;

        if(curr_node === null){ //empty list
            this.head = node;
            this.tail = node;
            this._length++;
            return node
        }

        node.next = curr_node;
        curr_node.prev = node
        this.head = node;
        this._length++;

        return node;
    }
    find(position){
        let curr_node = this.head;
        if (position > this._length || position < 1 || this._length === 0) return;

        while (position !== 0) {
            curr_node = curr_node.next;
            position--;
        }
        return curr_node;
    }
    remove(position){
        let prev_node = this.find(position-1)
        let curr_node = this.find(position)

        curr_node.prev.next = curr_node.next
        curr_node.next.prev = curr_node.prev
        this._length--;
    }
    printList() {
        let curr_node = this.head;
        let print_str = "";
        while (curr_node !== null) {
            let arr = curr_node.next === null ? "" : " <-> ";
            print_str += curr_node.value + arr;
            curr_node = curr_node.next;
        }
        console.log("Printed List: ", print_str);
    }
}

function test() {
    let ll = new Doubly();
    for (var i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 11);
        console.log("adding: ", number);
        // ll.addTail(number); 
        ll.addFront(number)
    }

    ll.printList();
    ll.remove(5);
    ll.printList();
}

test()
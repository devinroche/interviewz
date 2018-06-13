/*  linked list
*   node: data & pointer to next node
*   ll: head & length
*   add: add node to ll
*   search: find node at postition
*   remove: remove node at pos
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this._length = 0;
    }
    add(value) {
        let node = new Node(value);
        let curr_node = this.head;
        if (curr_node === null) {
            this.head = node;
            this._length++;

            return node;
        }

        while (curr_node.next !== null) {
            curr_node = curr_node.next;
        }
        curr_node.next = node;

        this._length++;
        return node;
    }
    search(position) {
        let curr_node = this.head;
        if (position > this._length || position < 1 || this._length === 0) return;

        while (position !== 0) {
            curr_node = curr_node.next;
            position--;
        }
        return curr_node;
    }
    remove(position) {
        if (position > this._length || position < 1 || this._length === 0) return;

        if (position === 1) {
            this.head = 0;
            this._length--;
        }

        let prev_node = this.search(position - 1);
        let curr_node = this.search(position);
        prev_node.next = curr_node.next;
        this._length--;
    }
    printList() {
        let curr_node = this.head;
        let print_str = "";
        while (curr_node !== null) {
            let arr = curr_node.next === null ? "" : " -> ";
            print_str += curr_node.value + arr;
            curr_node = curr_node.next;
        }
        console.log("Printed List: ", print_str);
    }
    llength() {
        return this._length;
    }
}

function test() {
    let ll = new LinkedList();
    for (var i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 11);
        console.log("adding: ", number);
        ll.add(number);
    }

    ll.printList();
    console.log("removing node @ 5, current length: ", ll.llength());
    ll.remove(5);
    console.log("New Length: ", ll.llength());
    ll.printList();
}

test()

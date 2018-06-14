# stax and queues
js implementation of a stack and queue in js.

js has built in stack operations, but i wanted to do it by hand. when displayed, the stack will look backwards, but all all operations (pop, push, etc) reads from the back of the stack (really the front)...

## stack
Last in first out. Similar to pringles can.

### complexity
O(1)

<div style="text-align:center"><img src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/stack.png"/></div>

## queue
similar to stack, but last in last out. 

### complexity 
| Operation | Best Case | Worst Case |
|-----------|-----------|------------|
| Search    | O(n)      | O(n)       |
| Insertion | O(1)      | O(1)       |
| Deletion  | O(1)      | O(1)       |

<div style="text-align:center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/600px-Data_Queue.svg.png"/></div>


### implement 

#### with linked list
- [ ] enqueue(value) - adds value at position at tail
- [ ] dequeue() - returns value and removes least recently added element (front)
- [ ] empty()

#### with array
- [x] enqueue(value) - adds item at end of available storage
- [x] dequeue() - returns value and removes least recently added element
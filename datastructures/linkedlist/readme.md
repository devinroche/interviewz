# linked list
Linked list implementation. Includes doubly and singly linked lists.

## single linked list
- pointer to next node
- stores value
- last node points to null

### complexity 
| Operation | Best Case | Worst Case |
|-----------|-----------|------------|
| Search    | O(n)      | O(n)       |
| Insertion | O(1)      | O(1)       |
| Deletion  | O(1)      | O(1)       |

<div style="text-align:center"><img src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png"/></div>


## doubly linked list
Doubly linked list is the same as a singly linked list except also points to the previous node.
- point to next node
- point to prev node
- value

### complexity
| Operation | Best Case | Worst Case |
|-----------|-----------|------------|
| Search    | O(n)      | O(n)       |
| Insertion | O(1)      | O(1)       |
| Deletion  | O(1)      | O(1)       |

<div style="text-align:center"><img src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/03/DLL1.png"/></div>

### implement 
- [x] size() - returns number of data elements in list
- [x] value_at(index) - returns the value of the nth item (starting at 0 for first)
- [x] push_front(value) - adds an item to the front of the list
- [x] push_back(value) - adds an item at the end
- [x] erase(index) - removes node at given index
- [ ] pop_front() - remove front item and return its value
- [ ] pop_back() - removes end item and returns its value
- [ ] front() - get value of front item
- [ ] back() - get value of end item
- [ ] insert(index, value) - insert value at index, so current item at that index is pointed to by new item at index
- [ ] value_n_from_end(n) - returns the value of the node at nth position from the end of the list
- [ ] reverse() - reverses the list
- [ ] remove_value(value) - removes the first item in the list with this value
# Trees
An odd looking data structure.. each node can have up to two children. 

Different Trees:
- [ ] Binary Search Tree
- [ ] AVL Tree
- [ ] Red-Black Tree
- [ ] Trie

## Binary Search Tree <a name="bst"></a>
- n is the root
- all values in n's *left* subtree are less than n
- all values in n's *right* subtree are greater than n
- full binary tree: binary tree in which each node has exactly zero or two children.
- complete binary tree: binary tree where all nodes have 2 kids with exception of the bottom level which is filled from left to right.

### complexity
| Operation | Best Case | Worst Case |
|-----------|-----------|------------|
| Search    | O(log n)  | O(n)       |
| Insertion | O(log n)  | O(n)       |
| Deletion  | O(log n)  | O(n)       |

<div style="text-align:center"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png" /></div>

## AVL Tree <a name="avl"></a>
- The sub-trees of every node differ in height by at most one.
- Every sub-tree is an AVL tree.

### complexity
| Operation | Best Case | Worst Case |
|-----------|-----------|------------|
| Search    | O(log n)  | O(log n)   |
| Insertion | O(log n)  | O(log n)   |
| Deletion  | O(log n)  | O(log n)   |

<div style="text-align:center"><img src ="https://www.cs.auckland.ac.nz/software/AlgAnim/fig/AVL_bal.gif" /></div>


## Red-Black Trees <a name="rb"></a>
- each node is either red or black
- root is always black
- all null leaves are black
- if node is red, children will be black
- every path from a given node to any leaf null nodes contains the same number of black nodes.

### complexity 
| Operation | Best Case | Worst Case |
|-----------|-----------|------------|
| Search    | O(log n)  | O(log n)   |
| Insertion | O(log n)  | O(log n)   |
| Deletion  | O(log n)  | O(log n)   |

<div style="text-align:center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Red-black_tree_example.svg/1350px-Red-black_tree_example.svg.png"/></div>


## Trie <a name="trie"></a>
nodes of tree hold alphabet and strings can be gathered by traversed down a branch path.
<div style="text-align:center"><img src="https://qph.fs.quoracdn.net/main-qimg-aea35028c2d1fe08e27cb3bda001c41f-c"/></div>
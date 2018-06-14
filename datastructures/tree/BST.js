class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    add(value){
        let node = new Node(value);
        if(this.root === null){
            this.root = node;
            return;
        }
        let current = this.root
        while(current){
            if(node.value > current.value){
                if(current.right === null){
                    current.right = node;
                    return;
                }
                current = current.right;
            }
            else if(node.value < current.value){
                if(current.left === null){
                    current.left = node;
                    return
                }
                current = current.left
            }
            else {
                return
            }
        }
    }
    remove(value){
        // case 1: no child
        // case 2: 1 child
        // case 3: 2 children ouch

    }
    find(value){
        let curr = this.root
        while(curr !== null){
            if(value > curr.value){
                curr = curr.right
            }else if(value < curr.value){
                curr = curr.left
            } else if(value = curr.value){
                console.log('found')
                return curr
            }
        }
        console.log('not found')
        return false
    }
    inorder(curr = this.root){ // left, root, right
        if(curr){
            this.inorder(curr.left)
            console.log(curr.value)
            this.inorder(curr.right)
        }
    };
    preorder(curr = this.root){ // root, left, right
        if(curr){
            console.log(curr.value)
            this.preorder(curr.left)
            this.preorder(curr.right)
        }
    }
    postorder(curr = this.root){ // left, right, root
        if(curr){
            this.postorder(curr.left)
            this.postorder(curr.right)
            console.log(curr.value)
        }
    }
    height(curr = this.root){
        if(curr === null) return 0

        let l_height = this.height(curr.left);
        let r_height = this.height(curr.right);

        return l_height > r_height ? l_height + 1 : r_height + 1
    }
    count(curr = this.root){
        if (curr === null) { 
            return 0
        }
        else if(curr.left === null && curr.right === null){
            return 1
        }
        return this.count(curr.left) + this.count(curr.right) + 1
    }
    max(curr = this.root){
        if (curr.right !== null) {
            return this.max(curr.right)
        }
        return curr.value
    }
}

function test(){
    let bst = new BST()
    
    for(var i=0; i<10; i++){
        let num = Math.floor(Math.random() * 20)
        console.log('adding: ', num)
        bst.add(num)
    }
    
    // bst.preorder()
    console.log('----------')
    // bst.inorder()
    // console.log('----------')
    // bst.postorder()
    // console.log(bst.count())
    console.log(bst.max())
}

test()
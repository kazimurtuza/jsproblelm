class Node {
  constructor(val) {
    this.val = val;
    this.nex = null;
  }
}
let head = new Node(10);
head.nex = new Node(11);

let node = head.nex;
console.log(node);
head.nex = new Node(101);
console.log(node);

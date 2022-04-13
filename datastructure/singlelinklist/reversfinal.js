class Node {
  constructor(val) {
    this.val = val;
    this.nex = null;
  }
}

class SinglyLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.obj = null;
  }

  push(val) {
    var newnode = new Node(val);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      this.tail.nex = newnode;
      this.tail = newnode;
    }

    // console.log(this.tail);
    // console.log("-----------");

    this.length++;
    return this;
  }

  travers() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.nex;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newtel = current;
    while (current.nex) {
      newtel = current;
      current = newtel.nex;
    }
    this.tail = newtel;
    this.tail.nex = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currenthead = this.head;
    this.head = currenthead.nex;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return currenthead;
  }

  unshift(val) {
    var newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }

    newnode.nex = this.head;
    this.head = newnode;
    this.length++;
  }
  get(index) {
    if (0 > index || this.length <= index) return null;
    var count = 0;
    var currenthead = this.head;
    while (count !== index) {
      currenthead = currenthead.nex;
      count++;
    }
    return currenthead;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) return !!this.push(val);
    if (index == 0) return !!this.unshift(val);
    let newnode = new Node(val);
    let preobj = this.get(index - 1);
    let temp = preobj.nex;
    preobj.nex = newnode;
    newnode.nex = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == this.length - 1) return !!this.pop(val);
    if (index === 0) return !!this.shift();
    let preindex = this.get(index - 1);
    preindex.nex = this.get(index).nex;
    this.length--;
  }
  revers() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.nex;
      node.nex = prev;
      console.log(prev);
      console.log(
        "--------------------------------------------------enf----------------------------------"
      );
      prev = node;
      node = next;
      //   console.log(next);
      //   console.log("---pre---");
      //   console.log(prev);
      //   console.log("---node---");
      //   console.log(node);
      //   console.log("---End---" + i);
      //   console.log("<br>");
      //   console.log("<br>");
    }

    return this.head;
  }
}

let list = new SinglyLinklist();
list.push("101");
list.push("102");
list.push("103");
list.push("104");

// console.log(list.insert(10, "mim"));

// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.unshift("mim");
// list.unshift("jim");
// // console.log(list.head);
// console.log(list.get(3));
// list.remove(3);

// console.log(list.head);
// console.log(list.length);

// console.log(list.revers());
let info = list.revers();
console.log(info);

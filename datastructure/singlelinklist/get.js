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
}

let list = new SinglyLinklist();
list.push("101");
list.push("102");
list.push("103");
list.push("104");

// list.pop();
// list.pop();
// list.pop();
// list.pop();

list.shift();

list.unshift("mim");
list.unshift("jim");
// console.log(list.head);
console.log(list.get(3));

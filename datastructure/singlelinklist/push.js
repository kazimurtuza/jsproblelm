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
}

// var first = new Node("hlw");
// first.nex = new Node("abc");
// first.nex.nex = new Node("obj3");
// first.nex.nex.nex = new Node("obj3");

let list = new SinglyLinklist();
list.push("101");
list.push("102");
list.push("103");
list.push("104");

list.travers();

// console.log(list);

// discription

// class Obj {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// let dataobj = new Obj("1001");

// let mydata = dataobj;
// let copy = mydata;

// console.log(mydata);
// console.log(copy);
// let newob = new Obj("mim");
// copy.next = newob;

// console.log(mydata);

// let newob2 = new Obj("jim");

// newob.next = newob2;
// console.log(mydata);

// -----------------discription 2---------------------------------

// class Obj {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// let ob1 = new Obj(1);
// let obj2 = new Obj(2);
// ob1.nex = obj2;
// let ob3 = new Obj(3);
// ob1.nex.nex = ob3;
// let ob4 = new Obj(4);
// ob1.nex.nex.nex = ob4;

// console.log(ob1);
// ob3.val = 44;
// console.log(ob1);

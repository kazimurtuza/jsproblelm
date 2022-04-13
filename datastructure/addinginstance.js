class Let {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
    this.count = 0;
    this.arr = [];
  }

  fullname() {
    this.count += 1;
    return `${this.name} phone ${this.phone} ${this.count}`;
  }

  arraylist(scor) {
    this.arr.push(scor);
    return this.arr;
  }

  avg() {
    this.total = this.arr.reduce(function (pre, curren) {
      console.log(pre);
      return pre + curren;
    }, 0);
    return this.total / this.arr.length;
  }
  static info() {
    return "details 1099";
  }
}
let ob1 = new Let("mim", "37884");

console.log(ob1.fullname());
console.log(ob1.fullname());
console.log(ob1.fullname());
console.log(ob1.fullname());

console.log(ob1.arraylist(12));
console.log(ob1.arraylist(132));
console.log(ob1.arraylist(136));

console.log(ob1.avg());
console.log(ob1.avg());
console.log(ob1.avg());

console.log(Let.info());

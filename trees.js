class Node {
  constructor(val, children = []) {
    this.value = val;
    this.children = children;
  }
}

/* let amy = new Node("amy");
let bob = new Node("bob");
let barb = new Node("barb");
let barry = new Node("barry");

amy.children.push(bob);
amy.children.push(barb);
amy.children.push(barry);

console.log(amy); */

let amy = new Node("amy", [
  new Node("bob"),
  new Node("barb"),
  new Node("barry"),
]);

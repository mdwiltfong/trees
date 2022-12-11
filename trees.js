class Node {
  constructor(val, children = []) {
    this.value = val;
    this.children = children;
  }
  findDFS(val) {
    const toVisitStack = [this];
    while (toVisitStack.length) {
      const current = toVisitStack.pop(); //removes the last element in an array
      if (current.value == val) {
        return current;
      }
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
  }
  findBFS(val) {
    const toVisitQueue = [this];
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift(); //Removes from the beginning of the array
      if (current.value == val) {
        return current;
      }
      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
  }
}

/* let amy = new Node("amy");
let bob = new Node("bob");
let barb = new Node("barb");
let barry = new Node("barry");

amy.children.push(bob);
amy.children.push(barb);
amy.children.push(barry);

console.log(amy); 

let amy = new Node("amy", [
  new Node("bob"),
  new Node("barb"),
  new Node("barry"),
]);
*/

let htmlEl = new Node("html", [
  new Node("head", [new Node("title")]),
  new Node("body", [new Node("ul", [new Node("li", new Node("li2"))])]),
]);

console.log(htmlEl.find("ul"));

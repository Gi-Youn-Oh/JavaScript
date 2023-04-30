class Node {
    constructor(val){
      this.val = val;
      this.next = null
    }
  }
  
  function print(node){
    const values = []
    while(node){
      values.push(node.val);
      node = node.next
    }
    console.log(values.join("->"))
  }
  
  module.exports = { Node, print }
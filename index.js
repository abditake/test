'use strict';
let LinkedList = require('./linkedlist');

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(4);
list.add(4);
list.add(3);
list.add(92);
list.add(2);
list.add(93);
list.add(51);

// confirmed:  it works!
// console.log(list);
function traverse(list){
  let table = new Set();
  let current = list.head;
  let prev = null;

  let linkedList = list.head;
  
  console.log('****** Original LinkedList ******');
  while(linkedList){
    console.log(linkedList.value);
    linkedList = linkedList.next
  }
  
  console.log('****** newLinkedList ******',)

  while(current){
    if(table.has(current.value)){
      prev.next = current.next
      current = current.next
    }else{
      table.add(current.value)
      prev = current;
      current = current.next;

      console.log(prev.value);
    }
  }
}

traverse(list);
// write a function that takes in a list and traverse that linked list, console logging every value
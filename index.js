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
  
  console.log('****** linkedList-removing duplicates ******',)

  // I honestly struggled with this down here the main problem I was having from my algorithm to code was that I put prev = current.next but no I needed the next reference for prev to be the next reference for current

  // I needed help online to change prev = current.next to ---> prev.next = current.next
  while(current){
    if(table.has(current.value)){
      prev.next = current.next
      current = current.next
    }else{
      table.add(current.value)
      prev = current;
      current = current.next;
    }
  }

  // I didn't need to repeating anything just needed to traverse through this linked list again to prove I removed all duplicates.

  // originally i was just console.logging the values as I traversed in the while loop above but I wanted extra proof that I was changing the linked list that is being passed in.
  
  while(list.head){
    console.log(list.head.value);
    list.head = list.head.next;
  }



}

traverse(list);
// write a function that takes in a list and traverse that linked list, console logging every value
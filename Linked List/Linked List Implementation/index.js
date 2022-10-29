class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // index new node at first position
  prepend(value) {
    // prepend has O(1) time complexity
    const node = new Node(value);
    // if list is empty point head to newly created node
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // insert new node at last
  append(value) {
    // append has O(n) time complexity
    //step 1: create new node
    const node = new Node(value);
    //step 2: if list is empty
    if (this.isEmpty()) {
      this.head = node;
    }
    // step 3: made the last node in the list point to newly created node
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  // insert new node at given index
  insert(value, index) {
    // if index is less than zero or index is greater than size of the list
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
      // don't increase size of linked list here as that
      //is handled by the prepend method
    }
    // index > 0
    else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  // remove node via index
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    // remove the node at zero index
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    }
    // index greater than zero
    else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = prev.next.next;
    }
    this.size--;
    return removedNode.value;
  }

  // remove node of a particular value
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    // if the value to be removed is head
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    // if the value to be removed is not head
    else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty());
console.log("List size ", list.getSize());
list.print();
// list.append(10);
// list.print();
// list.append(20);
// list.append(30);
// list.print();

list.insert(10, 0);
list.print();
list.insert(20, 0);
list.print();
list.insert(30, 1);
list.print();
list.insert(40, 2);
list.print();
console.log(list.removeValue(40));
list.print();
console.log(list.removeValue(20));
list.print();
console.log(list.removeValue(60));
list.print();

console.log(list.getSize());

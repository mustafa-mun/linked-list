class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(head, tail, size) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}

const list = new linkedList();
list.append(50);
list.append(100);
list.prepend(25);
console.log(list);

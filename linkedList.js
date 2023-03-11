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
      this.size++;
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }
}

const list = new linkedList();
list.prepend(50);
list.prepend(25);
list.append(75)
console.log(list);

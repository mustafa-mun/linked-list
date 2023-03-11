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

  getSize() {
    return this.size;
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

  at(index) {
    if (index < 0) throw new Error("Index have to be greater than 0");
    if (index > this.size - 1) return null;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.data;
  }

  contains(value) {
    let curr = this.head;

    while (curr) {
      if (value === curr.data) return true;
      curr = curr.next;
    }
    return false;
  }
}

const list = new linkedList();
list.append(50);
list.append(100);
list.prepend(25);


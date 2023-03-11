class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    if (this.size > 0) {
      return this.head.data;
    }
    return null;
  }

  getTail() {
    if (this.size > 0) {
      return this.tail.data;
    }
    return null;
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

  insertAt(value, index) {
    if (index < 0) throw new Error("Index have to be greater than 0");
    if (index > this.size)
      throw new Error("Index can't be greater than lists size");

    if (index === 0) this.prepend(value);
    else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      const nextValue = prev.next;
      const node = new Node(value);
      node.next = nextValue;
      prev.next = node;
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0) throw new Error("Index have to be greater than 0");
    if (index > this.size - 1)
      throw new Error("Index can't be greater than or equal to lists size");

    let prev = this.head;

    if (index === 0) {
      this.head = prev.next;
    } else {
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      const next = prev.next.next;
      prev.next = next;
    }

    this.size--;
  }

  pop() {
    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    curr.next = null;
    this.tail = curr;
    this.size--;
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

  find(value) {
    let curr = this.head;
    let index = -1;
    while (curr) {
      index++;
      if (curr.data === value) return index;
      curr = curr.next;
    }
    return null;
  }

  toString() {
    if (this.size > 0) {
      let str = "";
      let curr = this.head;

      while (curr) {
        str += `( ${curr.data} ) -> `;
        curr = curr.next;
      }
      return str + "null";
    }
    throw new Error("List is empty!");
  }

  reverse() {
    let curr = this.head;
    let prev = null;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
}

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

  insertAt(value, index) {
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

  pop() {
    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    curr.next = null;
    this.tail = curr;
    this.size--;
    return curr;
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
}

const list = new linkedList();
list.append(50);
list.append(100);
list.prepend(25);
list.insertAt(75, 2);
console.log(list.toString());

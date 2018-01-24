class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode
    this.lastNode = firstNode
    this.size = 1
  }

  findByValue(val) {
    let currNode = this.firstNode
    while (currNode) {
      if (currNode.val === val)
        return currNode
      currNode = currNode.next
    }
    return false
  }

  addNewNode(node) {
    this.lastNode.next = node
    this.lastNode = node
    this.size++
  }

  addByValue(val) {
    this.addNewNode(new Node(val))
  }

  deleteByValue(val) { // first value
    if (this.firstNode.val === val) {
      this.firstNode = this.firstNode.next
      return
    }

    let currNode = this.firstNode.next
    let prevNode = this.firstNode
    while (currNode) {
      if (currNode.val === val) {
        prevNode.next = currNode.next
        return
      }
      prevNode = currNode
      currNode = currNode.next
    }
  }

  getSize() {
    this.size
  }

}

class Node {

  constructor(val, next=null) {
    this.val = val
    this.next = next
  }

}

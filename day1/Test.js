x = new Node(3)

myList = new LinkedList(x)
myList.addByValue(4)
myList.addByValue(7)


myList.findByValue(7)

y = new Node(5)
myList.addByNode(y)


// [3] -> [4] -> [7] -> [5]

myList.deleteByValue(7)

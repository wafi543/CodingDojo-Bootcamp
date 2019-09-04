
class DLNode:
    def __init__(self, val):
        self.value = val
        self.next = None
        self.prev = None


class DList:
    def __init__(self):
        self.fNode = None
        self.lNode = None
    
    def insert_end(self, val):
        node = DLNode(val)
        if self.fNode is None:
            self.fNode = node
        else:
            node = self.fNode
            while node.next is not None:
                node = node.next
        node.next = node
        node.prev = node
    
    def delete_existing(self, val):
        if self.fNode is None:
            print("list is empty")
            return
        if self.fNode.next is None:
            if self.fNode.value == val:
                self.fNode = None
            else:
                print("Node not found")
            return
        if self.fNode.value == val:
            self.fNode = self.fNode.next
            self.fNode.prev = None
            return
        node = self.fNode

        while node.next is not None:
            if node.next == val:
                break
            node = node.next
        if node.next is not None:
            node.prev.next = node.next
            node.next.prev = node.prev
        else:
            if node.value == val:
                node.next.prev = None
            else:
                print("Value not found")
    
    def printValues(self):
        node = self.fNode
        while node.next is not None:
            print(node.value)
            node = node.next

list = DList()
list.insert_end(34)
list.printValues()


                
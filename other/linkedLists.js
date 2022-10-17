class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    printList() {
        let currentNode = this.head;
        let string = '<head> ';
        while (currentNode !== null) {
            string += currentNode.data + ' ';
            currentNode = currentNode.next;
        }
        string += '<tail';
        console.log(string);
    }

    addHead(data) {
        let currentNode = this.head;
        if (currentNode === null) {
            this.head = new Node(data)
        } else {
            this.head = new Node(data, currentNode);
        }
    }

    deleteHead() {
        if (this.head == null) {
            return;
        } else {
            this.head = this.head.next;
        }
    }

    addTail(data) {
        let currentNode = this.head;
        if (currentNode === null) {
            this.head = new Node(data)
        } else {
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(data);
        }
    }

    deleteTail() {
        let current = this.head;
        let nodeBeforeCurrent;
        if (current === null) {
            return
        } else {
            while (current.next !== null) {
                nodeBeforeCurrent = current;
                current = current.next;
            }
            nodeBeforeCurrent.next = null;
        }
    }

    getMiddle() {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode.next != null) {
            counter++
            currentNode = currentNode.next;
        }
        return Math.floor(counter/2);
    }

    addToMiddle(data) {
        let middle = this.getMiddle();
        
        let currentNode = this.head;
        let counter = 0;

        while (currentNode.next != null) {
            if (counter === middle) {
                let oldNextNode = currentNode.next;
                currentNode.next = new Node(data, oldNextNode);
            }
            counter++;
            currentNode = currentNode.next;
        }
    }

    deleteMiddle() {
        let middle = this.getMiddle();

        let currentNode = this.head;
        let nodeBeforeCurrent;
        let counter = 0;

        while (counter <= middle) {
            if (counter === middle) {
                nodeBeforeCurrent.next = currentNode.next;
                currentNode.next = null;
            }
            counter++;
            nodeBeforeCurrent = currentNode;
            currentNode = currentNode.next;
        }
    }

    addNumberIntoOrderedList(num) {
        let currentNode = this.head
        while (currentNode !== null) {
            if (currentNode.data == num - 1) {
                let oldNextNode = currentNode.next;
                currentNode.next = new Node(num, oldNextNode);
            }
            currentNode = currentNode.next;
        }
    }

    deleteNumberFromOrderedList(num) {
        let currentNode = this.head
        let nodeBeforeCurrent;
        while (currentNode !== null) {
            if (currentNode.data == num) {
                nodeBeforeCurrent.next = currentNode.next
                currentNode.next = null;
            }
            nodeBeforeCurrent = currentNode;
            currentNode = currentNode.next;
        }
    }
}

maggieList = new LinkedList
maggieList.addHead('test1')
maggieList.addHead('test2')
maggieList.addHead('test3')
maggieList.deleteHead();
maggieList.addHead('test4')
maggieList.addTail('test5')
maggieList.addTail('test6')
maggieList.addTail('test7')
maggieList.deleteTail();
maggieList.addToMiddle('middle1');
maggieList.addToMiddle('middle2');
maggieList.printList();
maggieList.deleteMiddle();
maggieList.printList();

orderedList = new LinkedList;
orderedList.addTail(1)
orderedList.addTail(2);
orderedList.addTail(3);
orderedList.addTail(5);
orderedList.addTail(6);
orderedList.addTail(7);
orderedList.printList();
orderedList.addNumberIntoOrderedList(4);
orderedList.printList();
orderedList.deleteNumberFromOrderedList(5);
orderedList.printList();
// swapping values in a linked list (3, 6);
// Create a function that returns the nth last element of a singly linked list.

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

    returnNthToLastElement(n) {
        let currentNode = this.head;
        let counter = 0;
        let trailingNode = null;

        while (currentNode != null) {
            if (counter == n) {
                trailingNode = this.head;
            }
            if (counter > n) {
                trailingNode = trailingNode.next
            }
            currentNode = currentNode.next;
            counter++
        }

        if (trailingNode != null) {
            return trailingNode;
        } else {
            console.log('not long enough')
        }
    }

    swapValues(data1, data2) {
        let currentNode1 = this.head;
        let currentNode2 = this.head;

        let beforeTargetNode1;
        let beforeTargetNode2;

        let targetNode1 = null
        let targetNode2 = null;

        while (currentNode1 != null) {
            if (currentNode1.data == data1) {
                targetNode1 = currentNode1;
                break;
            }
            beforeTargetNode1 = currentNode1;
            currentNode1 = currentNode1.next;
        }

        while (currentNode2 != null) {
            if (currentNode2.data == data2) {
                targetNode2 = currentNode2;
                break;
            }
            beforeTargetNode2 = currentNode2;
            currentNode2 = currentNode2.next;
        }

        if (targetNode1 === null || targetNode2 === null) {
            console.log('data does not exist');
        } else {
            let next2 = targetNode2.next;
            let next1 = targetNode1.next;

            beforeTargetNode1.next = targetNode2;
            beforeTargetNode2.next = targetNode1;

            targetNode1.next = next2;
            targetNode2.next = next1;
        }
    }

    findUniqueValues() {
        let currentNode = this.head;
        let hash = {};
        while (currentNode != null) {
            let key = currentNode.data;
            if (hash[key]) {
                hash[key] += 1;
            } else {
                hash[key] = 1;
            }
            currentNode = currentNode.next;
        }
        let resultString = 'The unique data are: '
        Object.entries(hash).filter(n => n[1] === 1).forEach(n => {
            resultString += `${n[0]}, `
        });
        //Object.keys(hash).filter(n => n.value == 1);
        console.log(resultString);
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
orderedList.addTail(3);
orderedList.addTail(6);
orderedList.addTail(7);
orderedList.printList();
orderedList.addNumberIntoOrderedList(4);
orderedList.printList();
orderedList.deleteNumberFromOrderedList(5);
orderedList.printList();

const result = orderedList.returnNthToLastElement(2)
console.log(result);

orderedList.swapValues(2, 7);
orderedList.printList();
orderedList.findUniqueValues();
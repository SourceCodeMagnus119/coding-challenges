// Linked List Challenge: Implement a basic singly linked list

// Create duall classes called 'Node' and 'LinkedList' that adds
// and prints nodes.
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	append(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}

	printList() {
		let current = this.head;
		const elements = [];
		while (current) {
			elements.push(current.value);
			current = current.next;
		}
		console.log(elements.join(" -> "));
	}
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList(); // Expected output: 10 -> 20 -> 30
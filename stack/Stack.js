import LinkedList from "../linked-list/LinkedList";

export default class Stack {
	constructor() {
		this.linkedList = new LinkedList();
	}

	isEmpty() {
		return this.linkedList.head === null;
	}

	push(value) {
		return this.linkedList.prepend(value);
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.linkedList.head.value;
	}

	pop() {
		const returnData = this.linkedList.deleteHead();
		return returnData ? returnData.value : null;
	}

	toArray() {
		return this.linkedList
			.toArray()
			.map((linkedListNode) => linkedListNode.value);
	}

	toString(callback) {
		return this.linkedList.toString(callback);
	}
}
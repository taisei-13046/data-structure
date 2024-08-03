import LinkedList from "../linked-list/LinkedList";

export default class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}

	enqueue(value) {
		this.linkedList.append(value);
	}

	dequeue() {
		const removeHead = this.linkedList.deleteHead();
		return removeHead ? removeHead.value : null;
	}

	toString(callback) {
		return this.linkedList.toString(callback);
	}
}

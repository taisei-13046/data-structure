import LinkedList from "../linked-list/LinkedList";

export default class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}

	enqueue(value) {
		this.linkedList.append(value);
	}

	toString(callback) {
		return this.linkedList.toString(callback);
	}
}

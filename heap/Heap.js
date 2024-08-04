import Comparator from "../utils/Comparator";

export default class Heap {
	constructor(comparatorFunction) {
		if (new.target === Heap) {
			throw new TypeError("Cannot construct Heap instance directly");
		}

		// Array representation of the heap.
		this.heapContainer = [];
		this.compare = new Comparator(comparatorFunction);
	}

	peek() {
		if (this.heapContainer.length === 0) {
			return null;
		}

		return this.heapContainer.at(0);
	}

	isEmpty() {
		return this.heapContainer.length === 0;
	}
}
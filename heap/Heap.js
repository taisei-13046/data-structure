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

		return this.heapContainer[0];
	}

	isEmpty() {
		return this.heapContainer.length === 0;
	}

	swap(one, two) {
		const tmp = this.heapContainer[two];
		this.heapContainer[two] = this.heapContainer[one];
		this.heapContainer[one] = tmp;
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	hasParent(childIndex) {
		return this.getParentIndex(childIndex) >= 0;
	}

	leftChild(parentIndex) {
		return this.heapContainer[this.getLeftChildIndex(parentIndex)];
	}

	rightChild(parentIndex) {
		return this.heapContainer[this.getRightChildIndex(parentIndex)];
	}

	parent(childIndex) {
		return this.heapContainer[this.getParentIndex(childIndex)];
	}

	heapifyUp(customStartIndex) {
		let currentIndex = customStartIndex || this.heapContainer.length - 1;

		while (
			this.hasParent(currentIndex) &&
			!this.pairIsInCorrectOrder(
				this.parent(currentIndex),
				this.heapContainer[currentIndex],
			)
		) {
			this.swap(currentIndex, this.getParentIndex(currentIndex));
			currentIndex = this.getParentIndex(currentIndex);
		}
	}

	add(value) {
		this.heapContainer.push(value);
		this.heapifyUp();
		return this;
	}

	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1;
	}

	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2;
	}

	hasLeftChild(parentIndex) {
		return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
	}

	hasRightChild(parentIndex) {
		return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
	}

	heapifyDown(customStartIndex = 0) {
		let currentIndex = customStartIndex;
		let nextIndex = null;

		while (this.hasLeftChild(currentIndex)) {
			if (
				this.hasRightChild(currentIndex) &&
				this.pairIsInCorrectOrder(
					this.rightChild(currentIndex),
					this.leftChild(currentIndex),
				)
			) {
				nextIndex = this.getRightChildIndex(currentIndex);
			} else {
				nextIndex = this.getLeftChildIndex(currentIndex);
			}

			if (
				this.pairIsInCorrectOrder(
					this.heapContainer[currentIndex],
					this.heapContainer[nextIndex],
				)
			) {
				break;
			}

			this.swap(currentIndex, nextIndex);
			currentIndex = nextIndex;
		}
	}

	poll() {
		if (this.heapContainer.length === 0) {
			return;
		}

		if (this.heapContainer.length === 1) {
			return this.heapContainer.pop();
		}

		const item = this.heapContainer[0];

		this.heapContainer[0] = this.heapContainer.pop();
		this.heapifyDown();

		return item;
	}

	toString() {
		return this.heapContainer.toString();
	}

	pairIsInCorrectOrder(firstElement, secondElement) {
		throw new Error(`
      You have to implement heap pair comparison method
      for ${firstElement} and ${secondElement} values.
    `);
	}
}
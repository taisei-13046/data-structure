import MinHeap from "../heap/MinHeap";
import Comparator from "../utils/Comparator";

export default class PriorityQueue extends MinHeap {
	constructor() {
		super();

		this.priorities = new Map();

		this.compare = new Comparator(this.comparePriority.bind(this));
	}

	add(item, priority = 0) {
		this.priorities.set(item, priority);
		super.add(item);
		return this;
	}

	comparePriority(a, b) {
		if (this.priorities.get(a) === this.priorities.get(b)) {
			return 0;
		}
		return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
	}
}

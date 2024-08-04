import MinHeap from "../heap/MinHeap";
import Comparator from "../utils/Comparator";

export default class PriorityQueue extends MinHeap {
	constructor() {
		super();

		this.priorities = new Map();

		this.compare = new Comparator(this.comparePriority.bind(this));
	}
}
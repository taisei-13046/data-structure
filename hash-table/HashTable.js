import LinkedList from "../linked-list/LinkedList";

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

export default class HashTable {
	/**
	 * @param {number} hashTableSize
	 */
	constructor(hashTableSize = defaultHashTableSize) {
		// Create hash table of certain size and fill each bucket with empty linked list.
		this.buckets = Array(hashTableSize)
			.fill(null)
			.map(() => new LinkedList());

		// Just to keep track of all actual keys in a fast way.
		this.keys = {};
	}
}

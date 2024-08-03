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

	/**
	 * Converts key string to hash number.
	 *
	 * @param {string} key
	 * @return {number}
	 */
	hash(key) {
		const hash = Array.from(key).reduce(
			(acc, cur) => acc + cur.charCodeAt(),
			0,
		);

		return hash % this.buckets.length;
	}

	/**
	 * @param {string} key
	 * @param {*} value
	 */
	set(key, value) {
		const hash = this.hash(key);
		this.keys[key] = hash;
		const bucketLinkedList = this.buckets[hash];
		const node = bucketLinkedList.find({ callback: (val) => val.key === key });

		if (!node) {
			bucketLinkedList.append({ key, value });
		} else {
			node.value.value = value;
		}
	}

	/**
	 * @param {string} key
	 * @return {boolean}
	 */
	has(key) {
		return Object.hasOwnProperty.call(this.keys, key);
	}

	/**
	 * @param {string} key
	 * @return {*}
	 */
	get(key) {
		const bucketLinkedList = this.buckets[this.hash(key)];
		const node = bucketLinkedList.find({ callback: (val) => val.key === key });

		return node ? node.value.value : undefined;
	}

	/**
	 * @param {string} key
	 * @return {*}
	 */
	delete(key) {
		const keyHash = this.hash(key);
		delete this.keys[key];
		const bucketLinkedList = this.buckets[keyHash];
		const node = bucketLinkedList.find({ callback: (val) => val.key === key });

		if (node) {
			return bucketLinkedList.delete(node.value);
		}

		return null;
	}

	/**
	 * @return {string[]}
	 */
	getKeys() {
		return Object.keys(this.keys);
	}

	/**
	 * Gets the list of all the stored values in the hash table.
	 *
	 * @return {*[]}
	 */
	getValues() {
		return this.buckets.reduce((acc, cur) => {
			const bucketVals = cur.toArray().map((node) => node.value.value);
			return acc.concat(bucketVals);
		}, []);
	}
}

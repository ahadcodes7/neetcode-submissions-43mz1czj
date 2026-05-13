class Node {
    constructor (key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _insert (node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    _remove (node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);
        this._remove(node);
        this._insert(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this._remove(this.cache.get(key));
        }

        const node = new Node(key, value);
        this._insert(node);
        this.cache.set(key, node);

        if (this.cache.size > this.capacity) {
            this.cache.delete(this.head.next.key);
            this._remove(this.head.next);
        }
    }
}

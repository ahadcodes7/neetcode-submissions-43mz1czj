class ListNode {
    constructor (key = 0, val = 0, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.tail = new ListNode(0);
        this.head = new ListNode(0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);
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
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }   

        const node = new ListNode(key, value);
        this._insert(node);
        this.map.set(key, node);

        if (this.map.size > this.capacity) {
            const node = this.head.next;
            this._remove(node);
            this.map.delete(node.key);
        }
    }

    _insert (node) {
        node.next = this.tail;
        node.prev = this.tail.prev;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    _remove (node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
    }
}
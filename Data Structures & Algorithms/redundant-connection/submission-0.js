class DSU {
    constructor (n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    find (x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }

        return this.parent[x];
    }

    union (u, v) {
        const pu = this.find(u);
        const pv = this.find(v);

        if (pu === pv) {
            return false;
        }

        if (this.rank[pu] < this.rank[pv]) {
            this.parent[pu] = pv;
        } else if (this.rank[pu] > this.rank[pv]) {
            this.parent[pv] = pu;
        } else {
            this.parent[pv] = pu;
            this.rank[pu]++;
        }

        return true;
    }
}

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const dsu = new DSU(edges.length);

        for (const [u, v] of edges) {
            if (!dsu.union(u, v)) {
                return [u, v];
            }
        }
    }
}

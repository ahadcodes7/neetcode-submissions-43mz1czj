class Twitter {
    constructor() {
        this.time = 0;
        this.tweets = new Map();
        this.followees = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const user = this.tweets.get(userId) || [];
        user.push([tweetId, this.time]);
        this.time++;
        this.tweets.set(userId, user);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const users = new Set([userId, ...this.followees.get(userId) || new Set()]);
        const maxHeap = new MaxPriorityQueue((x) => x[1]);

        for (const user of users) {
            const tweets = this.tweets.get(user) || [];
            let cnt = 0;
            for (let i = tweets.length - 1; i >= 0 && cnt !== 10; i--) {
                maxHeap.enqueue(tweets[i]);
                cnt++;
            }
        }

        const tweets = [];
        while (maxHeap.size() > 0 && tweets.length < 10) {
            tweets.push(maxHeap.dequeue()[0]);
        }

        return tweets;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        const user = this.followees.get(followerId) || new Set();
        user.add(followeeId);
        this.followees.set(followerId, user);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const data = this.followees.get(followerId);
        if (data) {
            data.delete(followeeId);
            this.followees.set(followerId, data);
        }
    }
}


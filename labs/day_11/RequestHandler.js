const Post = require('./Post');
const { sendRequest } = require('../../utils/RequestHelper');

class RequestHandler {
    async getTargetPost(url, userId, postId) {
        // Construct the returned data as a Post data model from class Post
        const filterPosts = await this._getAllPosts(url, userId);
        if (filterPosts) {
            const foundedPost = filterPosts.filter(post => post.id === postId)[0];

            if (foundedPost) {
                const targetPost = new Post(foundedPost.userId, foundedPost.id, foundedPost.title, foundedPost.body);
                return targetPost;
            } else {
                console.log(`Not found any postId: ${postId} of user ${userId}`);
            }
        }
    }

    async getAllPostsOfUser(url, userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const allPosts = await this._getAllPosts(url, userId);
        if (allPosts) {
            return allPosts.map(post => new Post(post.userId, post.id, post.title, post.body));
        }
    }

    async _getAllPosts(url, userId) {
        const posts = await sendRequest(url);
        if (posts.some(obj => obj.userId === userId)) {
            return posts.filter(function (post) {
                return post.userId === userId;
            })
        }
        else {
            console.log(`User ${userId} does not exist. Please try with another userId`);
        }
    }
}
module.exports = RequestHandler;
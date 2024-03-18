const { sendRequest } = require('../../utils/RequestHelper')
const { getUserInput } = require('../../utils/UserInputHandler');

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUGS = '/posts';

/**
 * 1. Allow user to input an userid and postId, print out that post content
*/
const userId = Number(getUserInput('Please input user id:'));
const postId = Number(getUserInput('Please input post id:'));;
printTargetPosts(userId, postId);

/**
 *  2. Print all posts for that user
 */
printAllPosts(userId);

async function printTargetPosts(userId, postId) {
    const filterPosts = await _getAllPosts(userId);
    if (filterPosts) {
        const foundedPost = filterPosts.filter(function (post) {
            return post.id === postId;
        })

        if (foundedPost) {
            console.log(`Post content: ${foundedPost[0].body}`);
        } else {
            console.log(`Not found any postId: ${postId} of user ${userId}`);
        }
    }
}

async function printAllPosts(userId) {
    const allPosts = await _getAllPosts(userId);
    if (allPosts) {
        console.log(allPosts);
    }
}

async function _getAllPosts(userId) {
    const posts = await sendRequest(`${BASE_URL}${SLUGS}`);
    if (posts.some(obj => obj.userId === userId)) {
        return posts.filter(function (post) {
            return post.userId === userId;
        })
    }
    else {
        console.log(`User ${userId} does not exist. Please try with another userId`);
    }
}
const { sendRequest } = require('../../utils/RequestHelper');
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

function printTargetPosts(userId, postId) {
    _getAllPosts(userId).then(function (filterPosts) {
        if (filterPosts) {
            const foundedPost = filterPosts.filter(function (post) {
                return post.id === postId;
            })

            if (foundedPost) {
                console.log(foundedPost);
            } else {
                console.log(`Not found any postId: ${postId} of user ${userId}`);
            }
        }
    })
}

function printAllPosts(userId) {
    _getAllPosts(userId).then(function (filterPosts) {
        if (filterPosts) {
            console.log(filterPosts);
        }
    })

}

function _getAllPosts(userId) {
    return sendRequest(`${BASE_URL}${SLUGS}`).then(function (posts) {
        if (posts.some(obj => obj.userId === userId)) {
            return posts.filter(function (post) {
                return post.userId === userId;
            })
        }
        else {
            console.log(`User ${userId} does not exist. Please try with another userId`);
        }
    })
}
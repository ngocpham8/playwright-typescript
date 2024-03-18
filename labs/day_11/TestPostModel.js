const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11() {
    // Given params
    const userId = 1;
    const postId = 2;

    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const SLUGS = '/posts';
    const url = `${BASE_URL}${SLUGS}`;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    // print target post of user
    const post = await requestHandler.getTargetPost(url, userId, postId);
    const postContent = await post.body;
    console.log('Post content:', postContent);
    // print all posts of user
    const allPost = await requestHandler.getAllPostsOfUser(url, userId);
    console.log(allPost);
}
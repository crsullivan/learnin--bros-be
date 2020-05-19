const db = require('../database/dbconfig')

module.exports = {
    findPosts,
    savePost
};

function findPosts() {
    return db('posts');
}

async function savePost(post, { userId, userName }) {
    console.log(post)
    console.log(userId)
    console.log(userName)
    return await db('posts')
        .insert({
            ...post,
            user_id: userId,
            user_name: userName
        }).catch(e => {
            // console.log(e);
            throw e;
        })
}

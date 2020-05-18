const db = require('../database/dbconfig')

module.exports = {
    findPosts,
    savePost
};

function findPosts() {
    return db('posts');
}

async function savePost(post, { userId }) {
    console.log(post)
    console.log(userId)
    
    return await db('posts')
        .insert({
            ...post,
            user_id: userId,
        }).catch(e => {
            console.log(e);
            throw e;
        })
}

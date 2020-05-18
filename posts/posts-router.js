const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const Posts = require('./posts-model')

router.get('/', restricted, (req, res) => {
    posts
    .findPosts()
    .then(posts => {
        console.log('posts')
        console.log(posts);
        res.json(posts)
    })
    .catch(err => res.send(err))
})

router.post('/:userID', restricted, (req, res) => {
    const { userID } = req.params;
    const userId = req.decodedJwt.userId;
    const post = req.body;
    Posts
    .savePost(post, { userId })
    .then(post => {
        res.json(post)
    })
    .catch(err => res.send(err))
})

module.exports = router;

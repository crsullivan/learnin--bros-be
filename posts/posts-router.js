const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const Posts = require('./posts-model')

router.get('/', (req, res) => {
    Posts
    .findPosts()
    .then(posts => {
        console.log('posts')
        console.log(posts);
        res.json(posts)
    })
    .catch(err => res.send(err))
})

router.post('/new', restricted, (req, res) => {
    const userId = req.decodedJwt.userId;
    const userName = req.decodedJwt.name
    console.log("jwt", req.decodedJwt)
    const post = req.body;
    Posts
    .savePost(post, { userId, userName })
    .then(post => {
        res.json(post)
    })
    .catch(err => res.send(err))
})

module.exports = router;

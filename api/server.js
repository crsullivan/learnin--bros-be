const express = require('express');
const configureMiddleware = require('./configure-middleware')

const authRouter = require('../auth/auth-router')
const contributionsRouter = require('../contributions/contributions-router')
const postsRouter = require('../posts/posts-router')

const server = express();

configureMiddleware(server);

server.use('/auth', authRouter)
server.use('/contributions', contributionsRouter)
server.use('/posts', postsRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;
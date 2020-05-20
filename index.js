const server = require('./api/server.js');
var app = require('express')();
var http = require('http').createServer(server);
var io = require('socket.io')(http);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
  console.log('a user connected');
});

const PORT = process.env.PORT || 7777;
http.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});






// const server = require('./api/server.js');

// const PORT = process.env.PORT || 7777;
// server.listen(PORT, () => {
//   console.log(`\n=== Server listening on port ${PORT} ===\n`);
// });
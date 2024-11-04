import http from 'http';
console.log('Server is running on port 4000');

const Server = http.createServer((req, res) => {
    res.end("Hello, from NodeJS");
});

Server.listen(4000)
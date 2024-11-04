import express from 'express';

const Server = express();
const PORT = 4000;

Server.get("/", (req, res) => {
    console.log("GET");
    res.send("Hello, from Express");
});

Server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

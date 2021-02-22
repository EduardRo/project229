// HTTP MODULE
const http = require('http');
const server = http.createServer((req, res)=>{
    if (req.url==='/'){
        res.write('Hello to you ');
        res.end();
    }

    if (req.url==='/hacked'){
        res.write('Hy you are hacked!');
        res.end();
    }
});
server.on('connection', (socket)=>{
    console.log('New connection...');
})
server.listen(3000);

console.log('Listening on port 3000 ...');




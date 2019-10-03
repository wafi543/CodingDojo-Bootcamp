const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write("Main Page"); 
            response.end();
        });
    }
    else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/images/bentley.jpg') {
        fs.readFile('images/bentley.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/images/lamburgini.jpg') {
        fs.readFile('images/lamburgini.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/images/mercedes.jpg') {
        fs.readFile('images/mercedes.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");
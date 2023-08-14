//create web server
const server = http.createServer((req, res) => {
    //write response
    res.write('Hello World');
    res.end();
});

//listen on port 5000
server.listen(5000, () => console.log('Server running...'));
const http = require ('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //SET HEADER
    // res.setHeader('Content-type', 'text/plain')
    // res.write('hello');
    // res.end();
    
    //SET HEADER COM HTML
    res.setHeader('Content-type', 'text/html')


    res.write('<p>hello in html</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})


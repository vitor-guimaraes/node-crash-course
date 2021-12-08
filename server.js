const http = require ('http');
const fs = require ('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //SET HEADER
    // res.setHeader('Content-type', 'text/plain')
    // res.write('hello');
    // res.end();
    
    //SET HEADER COM HTML
    res.setHeader('Content-type', 'text/html')

    //SEND AN HTML FILE
    fs.readFile('./views/index.html', (err, data) => {
        if (err) { 
            console.log(err);
            res.end();        
        } else {
            // res.write(data);
            // res.end();
            res.end(data);

        }
    })

    // res.write('<p>hello in html</p>');
    // res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})


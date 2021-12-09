const { response } = require('express');
const express = require ('express');

//express app 
const app = express();

//listen for requests port 3000
app.listen(3000);

app.get('/',(req, res) => {
    
    // res.send('<p>home page</p>'); //express method
    res.sendFile('./views/index.html', { root: __dirname }); //(relative path, root folder)

});

app.get('/about',(req, res) => {
    
    res.sendFile('./views/about.html', { root: __dirname }); //(relative path, root folder)

});
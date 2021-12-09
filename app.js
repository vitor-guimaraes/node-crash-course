const { response } = require('express');
const express = require ('express');

//express app 
const app = express();

//listen for requests port 3000
app.listen(3000);

app.get('/',(req, res) => {
    
    res.send('<p>home page</p>'); //express method

});
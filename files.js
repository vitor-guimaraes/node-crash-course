const fs = require('fs');

//read files
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) {
        console.log(err)
    }
    //console.log(data) //não le o conteudo do arquivo
    console.log(data.toString())
});
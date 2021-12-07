const fs = require('fs');

//read files

// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     //console.log(data) //não le o conteudo do arquivo
//     console.log(data.toString())
// });


//write files

// fs.writeFile('./docs/blog.txt', 'hello, world', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('file was written');
// });


//directories

//1) CRIAR FOLDER
//   fs.mkdir('./assets', (err) => {
//       if (err) {
//           console.log(err)
//       } else {
//           console.log('folder created!')
//       }
//   });

//2) CRIAR FOLDER VERIFICANDO EXISTENCIA
// if(!fs.existsSync ('./assets')) {
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err)
//     } 
//         console.log('folder created!');
//     });    
//     } 
//     console.log('folder exists already!');

//3) CRIAR FOLDER VERIFICANDO EXISTENCIA, APAGA SE JÁ EXISTE
if (!fs.existsSync ('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
    console.log ('folder created!');
    }); 
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
    console.log ('folder deleted!')
    }); 
}


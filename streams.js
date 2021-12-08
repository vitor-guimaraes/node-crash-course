const fs = require ('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt')
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt');


//STREAM
// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     //console.log(chunk.toString());
//     console.log(chunk);

//     //ESCRITA
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });


//PIPING
readStream.pipe(writeStream);
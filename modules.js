// const people = require('./people');
// console.log('peopele object:', people);

// const data = require('./people');
// console.log('data variable:', data);
// console.log(data.people, data.ages);


const { people, ages } = require('./people');
console.log(people, ages);


const os = require('os');
console.log(os.platform(), os.homedir());
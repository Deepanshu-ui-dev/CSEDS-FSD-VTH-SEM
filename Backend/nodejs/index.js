const fs = require('fs');


fs.writeFileSync('ds-b.txt', 'This is a sample text file for DS-B students.');
const result = fs.readFileSync('./ds-b.txt', 'utf-8');
console.log(result);
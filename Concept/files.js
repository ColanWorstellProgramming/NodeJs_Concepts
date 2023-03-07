//fs, built into node.js file reader

//blocking
const { readFile, readFileSync } = require('fs')

const txt = readFileSync('./files.txt', 'utf8')
const txt2 = readFileSync('./files2.txt', 'utf8')

//Non - Blocking
readFile('./files2.txt', 'utf8', (err, txt2) => { // third
    console.log(txt2)
})

console.log('I should be first!') // first
console.log(txt) // second
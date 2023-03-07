//cleaner code file system non-blocking

const { readFile } = require('fs').promises

async function hello(){
    const file = await readFile('./files.txt', 'utf8')
    console.log(file)
}

hello()
console.log(global.num)
num = 10
console.log(global.num)
console.log(num)

process.on('exit', function(){
    console.log('exiting')
})
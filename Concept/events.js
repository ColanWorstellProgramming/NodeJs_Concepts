//Creating event and emitting it - useful for CPU intensive work, called event style programming

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('something', ()=> {
    console.log('Something Happened')
})

eventEmitter.emit('something')
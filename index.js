const logEvents = require('./logEvents')
const EventEmitter = require('events');

//on = eventlistener

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('log',(msg)=>{
    logEvents(msg);
});
myEmitter.emit('log','log event emitted');     
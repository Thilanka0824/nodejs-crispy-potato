const { log } = require("console")
const logEvents = require("./logEvents.js")

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {};

//instantiate the class
const myEmitter = new MyEmitter()

//add a listener for the event
myEmitter.on('log', (msg)=> logEvents(msg))

setTimeout(()=>{
    myEmitter.emit('log', 'Log event emitted!')
}, 1500)
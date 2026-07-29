const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet',()=>{
    console.log('Welcome to Event')
})
event.emit('greet')

// Using once 

event.once('greet',()=>{
    console.log('Welcome to Event')
})

event.emit('greet')
event.emit('greet')

// using removeListener

const callBackEvent = (name, age ) =>{
    console.log(`Hello ${name} , ${age}`)
}
event.on('removeListener', callBackEvent);

event.removeListener('removeListener' , callBackEvent)
event.emit('removeListener' , name = 'Muskan' , age = 21)

event.on('greet',()=>{
    console.log('Welcome to Event')
})
event.removeListener('greet')
event.emit('greet')
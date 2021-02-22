const EventRemitter = require('events');
const emitter = new EventRemitter;
const anotheremitter = new EventRemitter;
const loggin = new EventRemitter;
// EventRemitter is a class 
// Register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called',arg)
})

anotheremitter.on('messageALogged', (e)=>{
    console.log('Another Listener called',e)
})

loggin.on('Loggin',(e)=>{
    console.log('Loggin',e);
})


// Raise an event
emitter.emit('messageLogged', {id:1, url:'http://'});

anotheremitter.emit('messageALogged', {id:2, url:'http://another'});


// Raise: loggin (data:message)
loggin.emit('Loggin', {data:'message'});


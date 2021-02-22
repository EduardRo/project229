const EventEmitter = require('events');

// Raise an event

class Logger extends EventEmitter{
    log(message){
        console.log(message);

        this.emit('messageLogged', {id:2, url:'http://blablabla'});
    };


}

module.exports = Logger;

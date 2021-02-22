// const EventEmitter = require('events');
const Logger = require('./logger_event')
const logger = new Logger();

logger.log('message', (e) =>{
    console.log('messageLogged', e)
});

logger.log('message')
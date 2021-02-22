
const logger = require('./logger');
const ad = require('./app_2');
const path = require('path');
const os = require('os');


function sayHello(name)
{
   console.log('Hello dude: '+name); 


}
console.log(ad)
ad.address('NY, BLVD 45');
logger.log(logger.endPoint);
sayHello('gogu');
console.log(logger)
console.log(__filename);
console.log(__dirname);
const pathObj = path.parse(__filename);
console.log(pathObj)
console.log(pathObj.base)
console.log(os.totalmem + ' ' + os.freemem)
const totalMemory = os.totalmem;
console.log(`Total memory: ${totalMemory}`)
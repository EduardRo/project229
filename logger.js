let url='http://my.logger.io/log';

function log(message){
    // send and HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;
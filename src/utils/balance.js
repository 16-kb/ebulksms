var unirest = require('unirest');

// require 'promise' if not supported natively
if(typeof Promise !== 'function') var Promise = require('promise');

/**
* Get current balance
* 
* @param {string} restEndpoint

* @return {Promise}
*/
module.exports = function(restEndpoint) {
    return new Promise (function(resolve, reject) {
        unirest.get(restEndpoint)
          .headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
          .end(response => {
            var balance = (+response.body);
            if(typeof balance === 'number') {
                resolve({ balance: balance });
            } else {
                reject({ error: response.body });
            }
          });
    });
};

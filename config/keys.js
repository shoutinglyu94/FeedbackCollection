if(process.env.NODE_ENV == 'production') {
    // we are in the production - return the prod the set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys
    module.exports = require('./dev');
}
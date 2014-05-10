
/*!
 * Module dependencies.
 */

var path = require('path')
var rootPath = path.resolve(__dirname + '../..')


/**
 * Expose config
 */

module.exports = {
  development: {
    root: rootPath,
    db: 'mongodb://localhost/jackpot',
    
  },
  test: {
    root: rootPath,
    db: 'mongodb://localhost/jackpot',
  },
  staging: {
    root: rootPath,
    db: 'mongodb://localhost/jackpot',
  },
  production: {
    root: rootPath,
    db: 'mongodb://localhost/jackpot',
  }
}

/**************************************/

module.exports = nopeNotFound

/**************************************/

const nopeError = require ('./error')

function nopeNotFound (errorMessage = 'resource not found', ...rest) {
  return nopeError (404, errorMessage, ...rest)
}

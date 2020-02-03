/**************************************/

module.exports = nopeNotFound

/**************************************/

const nopeError = require ('./error')

function nopeNotFound (errorMessage = 'resource not found') {
  return nopeError (404, errorMessage)
}

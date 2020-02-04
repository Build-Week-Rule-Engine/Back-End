/**************************************/

module.exports = nopeInvalidCredentials

/**************************************/

const nopeError = require ('./error')

function nopeInvalidCredentials () {
  return nopeError (401, errorMessage)
}

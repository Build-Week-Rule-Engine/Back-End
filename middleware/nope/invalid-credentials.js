/**************************************/

module.exports = nopeInvalidCredentials

/**************************************/

const nopeError = require ('./error')

function nopeInvalidCredentials (errorMessage = 'invalid credentials') {
  return nopeError (401, errorMessage)
}

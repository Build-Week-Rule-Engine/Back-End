/**************************************/

module.exports = nopeInvalidCredentials

/**************************************/

const nopeError = require ('./error')

function nopeInvalidCredentials (
  errorMessage = 'invalid credentials',
  ...rest
) {
  return nopeError (401, errorMessage, ...rest)
}

/**************************************/

module.exports = nopeNotAuthenticated

/**************************************/

const nopeError = require ('./error')

function nopeNotAuthenticated (errorMessage = 'request not authenticated', ...rest) {
  return nopeError (401, errorMessage, ...rest)
}

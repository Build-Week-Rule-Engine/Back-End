/**************************************/

module.exports = respondWithNotAuthorized

/**************************************/

const respondWithError = require ('./respond-with-error')

function respondWithNotAuthorized (errorMessage = 'request not authorized') {
  return respondWithError (403, errorMessage)
}

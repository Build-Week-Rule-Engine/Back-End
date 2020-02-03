/**************************************/

module.exports = respondWithNotAuthenticated

/**************************************/

const respondWithError = require ('./respond-with-error')

function respondWithNotAuthenticated (errorMessage = 'request not authenticated') {
  return respondWithError (401, errorMessage)
}

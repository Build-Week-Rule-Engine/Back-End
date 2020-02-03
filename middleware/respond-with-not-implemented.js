/**************************************/

module.exports = respondWithNotImplemented

/**************************************/

const respondWithError = require ('./respond-with-error')

function respondWithNotImplemented (errorMessage = 'request not implemented') {
  return respondWithError (501, errorMessage)
}

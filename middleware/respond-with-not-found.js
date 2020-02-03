/**************************************/

module.exports = respondWithNotFound

/**************************************/

const respondWithError = require ('./respond-with-error')

function respondWithNotFound (errorMessage = 'resource not found') {
  return respondWithError (404, errorMessage)
}

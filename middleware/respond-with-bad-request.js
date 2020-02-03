/**************************************/

module.exports = respondWithBadRequest

/**************************************/

const respondWithError = require ('./respond-with-error')

function respondWithBadRequest (errorMessage = 'bad request') {
  return respondWithError (400, errorMessage)
}

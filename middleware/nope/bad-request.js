/**************************************/

module.exports = nopeBadRequest

/**************************************/

const nopeError = require ('./error')

function nopeBadRequest (errorMessage = 'bad request') {
  return nopeError (400, errorMessage)
}

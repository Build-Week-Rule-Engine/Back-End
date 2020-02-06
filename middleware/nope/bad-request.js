/**************************************/

module.exports = nopeBadRequest

/**************************************/

const nopeError = require ('./error')

function nopeBadRequest (
  errorMessage = 'bad request',
  ...rest
) {
  return nopeError (400, errorMessage, ...rest)
}

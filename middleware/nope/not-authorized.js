/**************************************/

module.exports = nopeNotAuthorized

/**************************************/

const nopeError = require ('./error')

function nopeNotAuthorized (
  errorMessage = 'request not authorized',
  ...rest,
) {
  return nopeError (403, errorMessage, ...rest)
}

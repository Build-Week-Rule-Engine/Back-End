/**************************************/

module.exports = nopeNotImplemented

/**************************************/

const nopeError = require ('./error')

function nopeNotImplemented (errorMessage = 'request not implemented') {
  return nopeError (501, errorMessage)
}

/**************************************/

module.exports = routeInfo

/**************************************/

const okResponse = require ('./response')

function routeInfo (
  message = `Hello. Please refer to [info] for available routes and methods.`,
  info,
) {
  return okResponse (200, message, { info })
}

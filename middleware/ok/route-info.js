/**************************************/

module.exports = routeInfo

/**************************************/

const okResponse = require ('./response')

function routeInfo (
  info,
  message = `Hello. Please refer to [info] for available routes and methods.`,
) {
  return okResponse (200, message, { info })
}

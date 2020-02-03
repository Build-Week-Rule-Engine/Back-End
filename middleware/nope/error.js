/**************************************/

module.exports = error

/**************************************/

function error (statusCode, errorMessage) {
  return (ri, ro) => (
    ro
    .status (statusCode)
    .json ({
      'error' : {
        'message' : errorMessage,
        'status' : statusCode,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })
  )
}

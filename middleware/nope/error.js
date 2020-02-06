/**************************************/

module.exports = error

/**************************************/

function error (
  statusCode = 500,
  errorMessage = 'server error',
  restOfError = {},
  restOfResponse = {},
) {
  return (ri, ro) => (
    ro
    .status (statusCode)
    .json ({
      'error' : {
        'message' : errorMessage,
        'status' : statusCode,
        'method' : ri.method,
        'route' : ri.originalUrl,
        ...restOfError,
      },
      ...restOfResponse,
    })
  )
}

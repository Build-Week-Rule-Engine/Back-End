/**************************************/

module.exports = response

/**************************************/

function response (
  statusCode = 200,
  responseMessage = 'ok',
  restOfResponse = {},
) {
  return (ri, ro) => (

    ro
    .status (statusCode)
    .json ({
      'message' : responseMessage,
      ...restOfResponse,
    })

  )
}

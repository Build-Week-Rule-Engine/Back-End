/***********************************************************
  signToken
***********************************************************/

module.exports = signToken

/**************************************/

const jwt = require ('jsonwebtoken')
const { config : { jwtSecret } } = require ('./__needs')

/**************************************/

function signToken (user) {

  const payload = {
    id : user._id,
    name : user.username,
  }

  const options = {
    expiresIn : '1d',
  }

  return jwt.sign (payload, jwtSecret, options)
}

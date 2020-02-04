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
    _id : user._id,
    username : user.username,
    email : user.email,
  }

  const options = {
    expiresIn : '1d',
  }

  return jwt.sign (payload, jwtSecret, options)
}

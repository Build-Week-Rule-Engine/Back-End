/***********************************************************
  authenticate
***********************************************************/

module.exports = authenticate

/**************************************/

const jwt = require ('jsonwebtoken')
const { config } = require ('./__needs')
const nope = require ('../nope')

/**************************************/

function authenticate (ri, ro, next) {

  const token = ri.headers.authorization

  if (token) {

    jwt.verify (token, config.JWT_SECRET, (error, decrypted) => {

      if (error) {

        nope.invalidCredentials () (ri, ro)

      }
      else {

        ri.user = {
          _id : decrypted._id,
          email : decrypted.email,
          username : decrypted.username,
        }

        next ()

      }

    })

  }
  else {

    nope.notAuthenticated () (ri, ro)

  }

}

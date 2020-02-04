/***********************************************************
  authenticate
***********************************************************/

module.exports = authenticate

/**************************************/

const jwt = require ('jsonwebtoken')
const { config : { jwtSecret } } = require ('./__needs')
const nope = require ('../nope')

/**************************************/

function authenticate (ri, ro, next) {

  const token = ri.headers.authorization

  if (token) {

    jwt.verify (token, jwtSecret, (error, decrypted) => {

      if (error) {

        nope.invalidCredentials () (ri, ro)

      }
      else {

        ri.user = {
          _id : decrypted.id,
          username : decrypted.username,
        }

        next ()

      }

    })

  }
  else {

    nope.invalidCredentials () (ri, ro)

  }

}

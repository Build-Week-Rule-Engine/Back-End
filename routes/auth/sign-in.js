/**************************************/

module.exports = signIn

/**************************************/

const {
  middleware : { amigx, nope },
  database : { models : { Users } },
} = require ('./__needs')

const bcrypt = require ('bcryptjs')
const signToken = require ('./signToken')

/**************************************/

function signIn (ri, ro) {

  const { username, password } = ri.body

  if (username && password) {

    Users.get ({ username }, '*')
    .then (([ user ]) => {

      if (user && bcrypt.compareSync (password, user.hash)) {

        const token = signToken (user)
        amigx.welcome ({
          _id : user._id,
          username : user.username,
          email : user.email,
        }, token) (ri, ro)

      }
      else {

        nope.invalidCredentials () (ri, ro)

      }

    })
    .catch ((error) => {

      nope.error (500, error) (ri, ro)

    })

  }
  else {

    nope.badRequest () (ri, ro)

  }

  return

}

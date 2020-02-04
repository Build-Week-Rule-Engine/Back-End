/**************************************/

module.exports = signUp

/**************************************/

const {
  middleware : { amigx, nope },
  database : { models : { Users } },
} = require ('./__needs')

const bcrypt = require ('bcryptjs')
const signToken = require ('./signToken')

/**************************************/

function signUp (ri, ro) {

  const { username, email, password } = ri.body

  if (username && email && password) {

    const data = {
      username,
      email,
      hash : bcrypt.hashSync (password, 10)
    }

    Users.push (data, Users._ownFields)
    .then (([ user ]) => {

      console.log (user)

      const token = signToken (user)
      amigx.welcome ({
        _id : user._id,
        username : user.username,
        email : user.email,
      }, token) (ri, ro)

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

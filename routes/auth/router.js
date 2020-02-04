/***********************************************************
  ~/auth - router
***********************************************************/

const BASE = '/auth'

const {
  Router,
  middleware : { amigx, nope },
  models : { Users },
} = require ('./__needs')

const bcrypt = require ('bcryptjs')
const signToken = require ('./signToken')

/**************************************/

const router = Router ()

router.route (BASE)
.get ((ri, ro) => {

  ro
  .status (200)
  .json ({
    'message' : 'hello world',
  })

})

router.route ('/sign-up')
.post ((ri, ro) => {

  const { username, email, password } = ri.body

  if (username && email && password) {

    const data = {
      username,
      email,
      hash : bcrypt.hashSync (password, 10)
    }

    Users.push (data)
    .then ((user) => {

      const token = signToken (user)
      amigx.welcome ({
        _id : user._id,
        username : user.username,
        email : user.email,
      }, token) (ri, ro)

    })
    .catch ((error) => {

      nope.error (error) (ri, ro)

    })

  }
  else {

    nope.badRequest () (ri, ro)

  }

  return

})

router.route ('/sign-in')
.post ((ri, ro) => {

  const { username, password } = ri.body

  if (username && password) {

    Users.findBy ({ username }, '*')
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

      nope.error (error) (ri, ro)

    })

  }
  else {

    nope.badRequest () (ri, ro)

  }

  return

})

/**************************************/

module.exports = router

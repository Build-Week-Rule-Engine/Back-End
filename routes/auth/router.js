/***********************************************************
  ~/auth - router
***********************************************************/

const BASE = '/auth'

const { Router } = require ('./__needs')

const signUp = require ('./sign-up')
const signIn = require ('./sign-in')

/**************************************/

const router = Router ()

router.route (BASE)
.get ((ri, ro) => {

  ro
  .status (200)
  .json ({
    'message' : 'Hello. Please refer to the available routes.',
    'routes' : {
      '/sign-up' : [ 'POST' ],
      '/sign-in' : [ 'POST' ],
    },
  })

})

router.route (BASE + '/sign-up')
.post (signUp)

router.route (BASE + '/sign-in')
.post (signIn)

/**************************************/

module.exports = router

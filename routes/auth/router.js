/***********************************************************
  ~/auth - router
***********************************************************/

const BASE = '/auth'
const INFO = require ('./info')

const {
  Router,
  middleware : { ok },
} = require ('./__needs')

const signUp = require ('./sign-up')
const signIn = require ('./sign-in')

/**************************************/

const router = Router ()

router.route (BASE)
.get (ok.routeInfo (INFO))

router.route (BASE + '/sign-up')
.post (signUp)

router.route (BASE + '/sign-in')
.post (signIn)

/**************************************/

module.exports = router

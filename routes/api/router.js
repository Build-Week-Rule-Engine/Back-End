/***********************************************************
  ~/api - router
***********************************************************/

const BASE = '/api'
const INFO = require ('./info')

const {
  Router,
  middleware : { ok, amigx },
} = require ('./__needs')

/**************************************/

const router = Router ()

router.use (BASE,

  amigx.authenticate,

  require ('../forms'),
  require ('../trees'),
  require ('../users'),

)

router.route (BASE)
.get (ok.routeInfo (INFO))

/**************************************/

module.exports = router

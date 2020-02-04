/***********************************************************
  ~/users - router
***********************************************************/

const BASE = '/users'

const {
  Router,
  middleware : { amigx, nope },
} = require ('./__needs')

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

/**************************************/

module.exports = router

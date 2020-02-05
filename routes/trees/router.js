/***********************************************************
  ~/trees - router
***********************************************************/

const BASE = '/trees'
const BY_ID = '/:tree_id'

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

router.route (BASE + BY_ID)

/**************************************/

module.exports = router

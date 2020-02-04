/***********************************************************
  ~/api - router
***********************************************************/

const BASE = '/api'

const {
  Router,
} = require ('./__needs')

/**************************************/

const router = Router ()

router.use (BASE,

  // require ('../forms'),
  // require ('../trees'),
  // require ('../users'),

)

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

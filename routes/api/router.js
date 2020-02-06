/***********************************************************
  ~/api - router
***********************************************************/

const BASE = '/api'

const {
  Router,
  middleware : { amigx },
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
.get ((ri, ro) => {

  ro
  .status (200)
  .json ({
    'message' : 'Hello. Please refer to the available routes.',
    'routes' : {
      '/forms' : [ 'GET' ],
      '/forms/:form_id' : [ 'GET' ],
      '/trees' : [ 'GET', 'POST' ],
      '/trees/:tree_id' : [ 'GET', 'PUT', 'DELETE' ],
      '/users' : [ 'GET' ],
      '/users/:user_id' : [ 'GET' ],
    },
  })

})

/**************************************/

module.exports = router

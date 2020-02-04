/***********************************************************
  app
***********************************************************/

const {
  Server,
  middleware : {
    nope
  },
  routes,
} = require ('./__needs')


/**************************************/

const app = Server ()

app.use ('/',

  require ('helmet') (),
  require ('cors') (),
  require ('morgan') ('dev'),
  require ('express').json (),

  routes['auth'],
  routes['api'],

)

router.use ('*',
  nope.notImplemented (),
)

/**************************************/

module.exports = app

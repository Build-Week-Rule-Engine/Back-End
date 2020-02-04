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

  require ('../routes/auth'),
  require ('../routes/api'),

)

router.use ('*',
  nope.notImplemented (),
)

/**************************************/

module.exports = app

/***********************************************************
  app
***********************************************************/

const BASE = '/'

const {
  Server,
  middleware : {
    nope
  },
} = require ('./__needs')

/**************************************/

const app = Server ()

app.use (BASE,

  require ('helmet') (),
  require ('cors') (),
  require ('morgan') ('dev'),
  require ('express').json (),

  require ('../routes/auth'),
  require ('../routes/api'),

)

app.use ('*',
  nope.notImplemented (),
)

/**************************************/

module.exports = app

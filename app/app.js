/***********************************************************
  app
***********************************************************/

const BASE = '/'
const INFO = require ('./info.json')

const {
  Server,
  middleware : { ok, nope },
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

app.route (BASE)
.get (ok.routeInfo (INFO))

app.route ('*')
.all (
  nope.notImplemented (),
)

/**************************************/

module.exports = app

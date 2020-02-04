/***********************************************************
  app
***********************************************************/

const BASE = '/'

const {
  Server,
  middleware : { nope },
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
.get ((ri, ro) => {

  ro
  .status (200)
  .json ({
    'message' : 'Hello. Please refer to the available routes.',
    'routes' : {
      [BASE] : [ 'GET' ],
      '/auth' : [ 'GET' ],
      '/api' : [ 'GET' ],
    },
  })

})

app.route ('*')
.all (
  nope.notImplemented (),
)

/**************************************/

module.exports = app

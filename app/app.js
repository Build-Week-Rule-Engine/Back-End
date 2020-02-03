/***********************************************************
  app
***********************************************************/

const {
  Server,
  middleware : {
    nope
  },
} = require ('./__needs')

const _middleware = require ('./_middleware')
const _routes = require ('./_routes')

/**************************************/

const app = Server ()

app.use ('/',
  _middleware (),
  _routes,
)

router.use ('*',
  nope.notImplemented (),
)

/**************************************/

module.exports = app

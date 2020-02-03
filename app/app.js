/***********************************************************
  app
***********************************************************/

const { Server, routes } = require ('./__needs')
const middleware = require ('./_middleware')

/**************************************/

const app = Server ()

app.use ('/',
  middleware (),
  routes,
)

/**************************************/

module.exports = app

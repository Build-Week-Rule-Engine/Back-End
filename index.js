/**********************************************************/

require ('dotenv').config ()

const app = require ('./app')
const port = require ('./config/app').port

app.listen (port, () => {
  console.log (`it's alive!`)
  console.log (`\n::: listening on port ${port} :::\n`)
})

/**************************************/

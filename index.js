/**********************************************************/

require ('dotenv').config ()

const app = require ('./app')
const PORT = require ('./config').PORT

app.listen (PORT, () => {

  console.log (`it's alive!`)
  console.log (`\n::: listening on port ${PORT} :::\n`)

})

/**************************************/

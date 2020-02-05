/**************************************/

module.exports = pushForm

/**************************************/

const {
  middleware : { nope },
  database : { models : { Forms } },
} = require ('./__needs')

/**************************************/

function pushForm (ri, ro) {

  const data = ri.body

  Forms.push (data)
  .then ((form) => {

    ro
    .status (201)
    .json (form)

  })
  .catch ((error) => {

    console.log (error)

    nope.error (500, `failed to push new form to forms`) (ri, ro)

  })

}

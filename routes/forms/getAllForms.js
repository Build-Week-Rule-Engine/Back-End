/**************************************/

module.exports = getAllForms

/**************************************/

const {
  middleware : { nope },
  database : { models : { Forms } },
} = require ('./__needs')

/**************************************/

function getAllForms (ri, ro) {

  Forms.getAll ()
  .then ((forms) => {

    ro
    .status (200)
    .json (forms)

  })
  .catch ((error) => {

    console.log (error)
    nope.error (500, `internal server error when getting all forms`) (ri, ro)

  })

}

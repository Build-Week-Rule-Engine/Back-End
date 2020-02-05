/**************************************/

module.exports = getFormByID

/**************************************/

const {
  middleware : { nope },
  database : { models : { Forms } },
} = require ('./__needs')

/**************************************/

function getFormByID (ri, ro) {

  const { form_id } = ri.params

  Forms.getFirst ({ _id : form_id })
  .then ((form) => {

    if (form !== undefined && form !== null) {

      ro
      .status (200)
      .json (form)

    }
    else {

      nope.notFound (`could not find form with id ${form_id}`) (ri, ro)

    }

  })
  .catch ((error) => {

    console.log (error)
    nope.error (500, `internal server error when getting form with id ${form_id}`) (ri, ro)

  })

}

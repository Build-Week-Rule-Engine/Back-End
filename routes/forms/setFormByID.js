/**************************************/

module.exports = setFormByID

/**************************************/

const {
  middleware : { nope },
  database : { models : { Forms } },
} = require ('./__needs')

/**************************************/

function setFormByID (ri, ro) {

  const { form_id } = ri.params
  const data = ri.body

  Forms.set (data, { _id : form_id })
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
    nope.error (500, `failed to set changes to form with id ${form_id}`) (ri, ro)

  })

}

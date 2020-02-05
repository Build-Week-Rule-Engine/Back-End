/**************************************/

module.exports = pullFormByID

/**************************************/

const {
  middleware : { nope },
  database : { models : { Forms } },
} = require ('./__needs')

/**************************************/

function pullFormByID (ri, ro) {

  const { form_id } = ri.params

  Forms.pull ({ _id : form_id })
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
    nope.error (500, `failed to pull form with id ${form_id}`) (ri, ro)

  })

}

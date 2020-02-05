/**************************************/

module.exports = getAllUsers

/**************************************/

const {
  middleware : { nope },
  database : { models : { Users } },
} = require ('./__needs')

/**************************************/

function getAllUsers (ri, ro) {

  Users.getAll ()
  .then ((users) => {

    ro
    .status (200)
    .json (users)

  })
  .catch ((error) => {

    console.log (error)
    nope.error (500, `internal server error when getting all users`) (ri, ro)

  })

}

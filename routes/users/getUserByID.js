/**************************************/

module.exports = getUserByID

/**************************************/

const {
  middleware : { nope },
  database : { models : { Users } },
} = require ('./__needs')

/**************************************/

function getUserByID (ri, ro) {

  const { user_id } = ri.params

  Users.getFirst ({ _id : user_id })
  .then ((user) => {

    if (user !== undefined && user !== null) {

      ro
      .status (200)
      .json (user)

    }
    else {

      nope.notFound (`could not find user with id ${user_id}`) (ri, ro)

    }

  })
  .catch ((error) => {

    console.log (error)

    nope.error (500, `internal server error when getting user with id ${user_id}`) (ri, ro)

  })

}

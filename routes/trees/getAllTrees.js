/**************************************/

module.exports = getAllTrees

/**************************************/

const {
  middleware : { nope },
  database : { models : { Trees } },
} = require ('./__needs')

/**************************************/

function getAllTrees (ri, ro) {

  Trees.getAll ()
  .then ((trees) => {

    ro
    .status (200)
    .json (trees)

  })
  .catch ((error) => {

    console.log (error)
    nope.error (500, `internal server error when getting all trees`) (ri, ro)

  })

}

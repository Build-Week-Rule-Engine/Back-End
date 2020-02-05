/**************************************/

module.exports = getTreeByID

/**************************************/

const {
  middleware : { nope },
  database : { models : { Trees } },
} = require ('./__needs')

/**************************************/

function getTreeByID (ri, ro) {

  const { tree_id } = ri.params

  Trees.get ({ _id : tree_id })
  .then (([ tree ]) => {

    if (tree !== undefined && tree !== null) {

      ro
      .status (200)
      .json (tree)

    }
    else {

      nope.notFound (`could not find tree with id ${tree_id}`) (ri, ro)

    }

  })
  .catch ((error) => {

    console.log (error)
    nope.error (500, `internal server error when getting tree with id ${tree_id}`) (ri, ro)

  })

}

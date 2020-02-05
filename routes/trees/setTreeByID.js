/**************************************/

module.exports = setTreeByID

/**************************************/

const {
  middleware : { nope },
  database : { models : { Trees } },
} = require ('./__needs')

/**************************************/

function setTreeByID (ri, ro) {

  const { tree_id } = ri.params
  const data = ri.body

  Trees.set (data, { _id : tree_id })
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
    nope.error (500, `failed to set changes to tree with id ${tree_id}`) (ri, ro)

  })

}

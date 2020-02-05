/**************************************/

module.exports = pushTree

/**************************************/

const {
  middleware : { nope },
  database : { models : { Trees } },
} = require ('./__needs')

/**************************************/

function pushTree (ri, ro) {

  const data = ri.body

  Trees.push ([ data ])
  .then ((tree) => {

    ro
    .status (201)
    .json (tree)

  })
  .catch ((error) => {

    console.log (error)

    nope.error (500, `failed to push new tree to trees`) (ri, ro)

  })

}

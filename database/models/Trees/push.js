/**************************************/

module.exports = push

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertToDB = require ('./_convertToDB')
const getFirst = require ('./getFirst')

async function push (tree_values, _select = _publicFields) {

  tree_values = tree_values.map (_convertToDB)

  const _ids = await (
    db ('Trees')
    .insert (tree_values, [ '_id' ])
  )

  let tree_records = Promise.all (
    _ids.map (
      async (_id) => await getFirst ({ _id }, _select)
    )
  )

  return tree_records

}

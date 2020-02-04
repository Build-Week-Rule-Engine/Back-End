/**************************************/

module.exports = push

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const getFirst = require ('./getFirst')

async function push (tree_values, _select = _publicFields) {
  const _ids = await (
    db ('trees')
    .insert (tree_values, [ '_id' ])
  )

  let tree_records = Promise.all (
    _ids.map (
      async (_id) => await getFirst ({ _id }, _select)
    )
  )

  return tree_records
}

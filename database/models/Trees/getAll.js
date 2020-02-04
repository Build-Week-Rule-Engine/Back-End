/**************************************/

module.exports = getAll

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function getAll (_select = _publicFields) {

  let tree_records = await (
    db ('Trees')
    .select (_select)
  )

  return tree_records

}

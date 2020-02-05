/**************************************/

module.exports = getAll

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertFromDB = require ('./_convertFromDB')

async function getAll (_select = _publicFields) {

  let tree_records = await (
    db ('Trees')
    .select (_select)
  )
  tree_records = tree_records.map (_convertFromDB)

  return tree_records

}

/**************************************/

module.exports = get

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertFromDB = require ('./_convertFromDB')

async function get (_where, _select = _publicFields) {

  let tree_records = await (
    db ('Trees')
    .select (_select)
    .where (_where)
  )
  tree_records = tree_records.map (_convertFromDB)

  return tree_records

}

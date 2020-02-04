/**************************************/

module.exports = get

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function get (_where, _select = _publicFields) {

  let tree_records = await (
    db ('Trees')
    .select (_select)
    .where (_where)
  )

  return tree_records

}

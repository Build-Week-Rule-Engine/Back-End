/**************************************/

module.exports = set

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertToDB = require ('./_convertToDB')
const get = require ('./get')

async function set (tree_value, _where, _select = _publicFields) {

  tree_value = _convertToDB (tree_value)

  await (
    db ('Trees')
    .where (_where)
    .update (tree_value)
  )

  let tree_records = await get (_where, _select)

  return tree_records

}

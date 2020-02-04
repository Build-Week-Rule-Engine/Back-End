/**************************************/

module.exports = pull

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const get = require ('./get')

async function pull (_where, _select = _publicFields) {
  let tree_records = await get (_where, _select)

  await (
    db ('trees')
    .where (_where)
    .delete ()
  )

  return tree_records
}

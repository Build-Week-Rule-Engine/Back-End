/**************************************/

module.exports = getFirst

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function getFirst (_where, _select = _publicFields) {
  let tree_record = await (
    db ('Trees')
    .first (_select)
    .where (_where)
  )

  return tree_record
}

/**************************************/

module.exports = getFirst

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertFromDB = require ('./_convertFromDB')

async function getFirst (_where, _select = _publicFields) {

  let tree_record = await (
    db ('Trees')
    .first (_select)
    .where (_where)
  )
  tree_record = _convertFromDB (tree_record)

  return tree_record

}

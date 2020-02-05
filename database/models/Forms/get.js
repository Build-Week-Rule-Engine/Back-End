/**************************************/

module.exports = get

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertFromDB = require ('./_convertFromDB')

async function get (_where, _select = _publicFields) {

  let form_records = await (
    db ('Forms')
    .select (_select)
    .where (_where)
  )
  form_records = form_records.map (_convertFromDB)

  return form_records

}

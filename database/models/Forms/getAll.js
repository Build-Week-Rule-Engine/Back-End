/**************************************/

module.exports = getAll

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertFromDB = require ('./_convertFromDB')

async function getAll (_select = _publicFields) {

  let form_records = await (
    db ('Forms')
    .select (_select)
  )
  form_records = form_records.map (_convertFromDB)

  return form_records

}

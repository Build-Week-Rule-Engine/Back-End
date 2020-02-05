/**************************************/

module.exports = getFirst

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertFromDB = require ('./_convertFromDB')

async function getFirst (_where, _select = _publicFields) {

  let form_record = await (
    db ('Forms')
    .first (_select)
    .where (_where)
  )
  form_record = _convertFromDB (form_record)

  return form_record

}

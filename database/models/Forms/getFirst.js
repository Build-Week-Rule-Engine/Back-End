/**************************************/

module.exports = getFirst

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function getFirst (_where, _select = _publicFields) {

  let form_record = await (
    db ('Forms')
    .first (_select)
    .where (_where)
  )

  return form_record

}

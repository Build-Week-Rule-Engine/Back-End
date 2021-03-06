/**************************************/

module.exports = set

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertToDB = require ('./_convertToDB')
const get = require ('./get')

async function set (form_value, _where, _select = _publicFields) {

  form_value = _convertToDB (form_value)

  await (
    db ('Forms')
    .where (_where)
    .update (form_value)
  )

  let form_records = await get (_where, _select)

  return form_records

}

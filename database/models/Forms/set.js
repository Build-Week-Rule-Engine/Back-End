/**************************************/

module.exports = set

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const get = require ('./get')

async function set (form_value, _where, _select = _publicFields) {
  await (
    db ('Forms')
    .where (_where)
    .update (form_value)
  )

  let form_records = await get (_where, _select)

  return form_records
}

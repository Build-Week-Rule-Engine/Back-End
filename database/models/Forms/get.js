/**************************************/

module.exports = get

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function get (_where, _select = _publicFields) {
  let form_records = await (
    db ('Forms')
    .select (_select)
    .where (_where)
  )

  return form_records
}

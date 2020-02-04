/**************************************/

module.exports = getAll

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function getAll (_select = _publicFields) {
  let form_records = await (
    db ('forms')
    .select (_select)
  )

  return form_records
}

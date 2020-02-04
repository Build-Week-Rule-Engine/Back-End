/**************************************/

module.exports = getAll

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function getAll (_select = _publicFields) {
  let user_records = await (
    db ('users')
    .select (_select)
  )

  return user_records
}

/**************************************/

module.exports = get

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function get (_where, _select = _publicFields) {

  let user_records = await (
    db ('Users')
    .select (_select)
    .where (_where)
  )

  return user_records

}

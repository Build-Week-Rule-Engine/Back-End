/**************************************/

module.exports = set

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const get = require ('./get')

async function set (user_value, _where, _select = _publicFields) {

  await (
    db ('Users')
    .where (_where)
    .update (user_value)
  )

  let user_records = await get (_where, _select)

  return user_records

}

/**************************************/

module.exports = getFirst

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')

async function getFirst (_where, _select = _publicFields) {
  let user_record = await (
    db ('Users')
    .first (_select)
    .where (_where)
  )

  return user_record
}

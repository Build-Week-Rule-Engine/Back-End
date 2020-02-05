/**************************************/

module.exports = pull

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertFromDB = require ('./_convertFromDB')
const get = require ('./get')

async function pull (_where, _select = _publicFields) {

  let form_records = await get (_where, _select)

  await (
    db ('Forms')
    .where (_where)
    .delete ()
  )

  return form_records

}

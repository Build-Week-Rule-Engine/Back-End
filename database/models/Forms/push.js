/**************************************/

module.exports = push

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const _convertToDB = require ('./_convertToDB')
const getFirst = require ('./getFirst')

async function push (form_values, _select = _publicFields) {

  form_values = form_values.map (_convertToDB)

  const _ids = await (
    db ('Forms')
    .insert (form_values, [ '_id' ])
  )

  let form_records = Promise.all (
    _ids.map (
      async (_id) => await getFirst ({ _id }, _select)
    )
  )

  return form_records

}

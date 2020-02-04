/**************************************/

module.exports = push

/**************************************/

const { db } = require ('./__needs')

const _publicFields = require ('./_publicFields')
const getFirst = require ('./getFirst')

async function push (user_values, _select = _publicFields) {
  const _ids = await (
    db ('Users')
    .insert (user_values, [ '_id' ])
  )

  let user_records = Promise.all (
    _ids.map (
      async (_id) => await getFirst ({ _id }, _select)
    )
  )

  return user_records
}

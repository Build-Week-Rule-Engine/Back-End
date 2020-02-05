/**************************************/

module.exports = convertFromDB

/**************************************/

function convertFromDB (tree_record) {

  return {
    ...tree_record,
    data : JSON.parse (tree_record.data),
  }

}

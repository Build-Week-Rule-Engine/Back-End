/**************************************/

module.exports = convertFromDB

/**************************************/

function convertFromDB (form_record) {

  return {
    ...form_record,
    data : JSON.parse (form_record.data),
  }

}

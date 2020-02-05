/**************************************/

module.exports = convertToDB

/**************************************/

function convertToDB (form_value) {

  return {
    ...form_value,
    data : JSON.stringify (form_value.data),
  }

}

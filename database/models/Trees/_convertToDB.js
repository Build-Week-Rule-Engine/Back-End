/**************************************/

module.exports = convertToDB

/**************************************/

function convertToDB (tree_value) {

  return {
    ...tree_value,
    data : JSON.stringify (tree_value.data),
  }

}

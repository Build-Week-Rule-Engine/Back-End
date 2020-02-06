/**************************************/

module.exports = {
  "/trees" : {
    "methods" : [ "GET", "POST" ],
    "/:tree_id" : {
      "methods" : [ "GET", "PUT", "DELETE" ],
    },
  },
}

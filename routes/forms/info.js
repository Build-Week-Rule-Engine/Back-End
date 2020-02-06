/**************************************/

module.exports = {
  "/forms" : {
    "methods" : [ "GET", "POST" ],
    "/:form_id" : {
      "methods" : [ "GET", "PUT", "DELETE" ],
    },
  },
}

/**************************************/

module.exports = {
  "/api" : {
    "methods" : [ "GET" ],
    ...require ('../forms/info'),
    ...require ('../trees/info'),
    ...require ('../users/info'),
  },
}

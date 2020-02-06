/**************************************/

module.exports = {
  "/" : {
    "methods" : [ "GET" ],
    ...require ('../routes/auth/info'),
    ...require ('../routes/api/info'),
  },
}

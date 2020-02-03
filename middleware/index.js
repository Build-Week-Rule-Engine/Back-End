/**************************************/

module.exports = {

  respondWithError : require ('./respond-with-error'),
  respondWithBadRequest : require ('./respond-with-bad-request'),
  respondWithNotAuthenticated : require ('./respond-with-not-authenticated'),
  respondWithNotAuthorized : require ('./respond-with-not-authorized'),
  respondWithNotFound : require ('./respond-with-not-found'),
  respondWithNotImplemented : require ('./respond-with-not-implemented'),

}

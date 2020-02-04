/**************************************/

module.exports = {

  error : require ('./error'),

  badRequest : require ('./bad-request'),
  invalidCredentials : require ('./invalid-credentials'),
  notAuthenticated : require ('./not-authenticated'),
  notAuthorized : require ('./not-authorized'),
  notFound : require ('./not-found'),
  notImplemented : require ('./not-implemented'),

}

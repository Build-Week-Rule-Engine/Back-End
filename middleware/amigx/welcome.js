/**************************************/

module.exports = welcome

/**************************************/

const ok = require ('../ok')

function welcome (user, token, ...rest) {
  return ok.response (
    200,
    `Welcome, ${user.username}. Here... Take this.`,
    { user, token, ...rest },
  )
}

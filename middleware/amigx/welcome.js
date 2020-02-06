/**************************************/

module.exports = welcome

/**************************************/

function welcome (user, token) {
  return (ri, ro) => {

    ro
    .status (200)
    .json ({
      'message' : `Welcome, ${user.username}. Here... Take this.`,
      user,
      token,
    })

  }
}

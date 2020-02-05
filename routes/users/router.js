/***********************************************************
  ~/users - router
***********************************************************/

const BASE = '/users'
const BY_ID = '/:user_id'

const { Router } = require ('./__needs')
const getAllUsers = require ('./getAllUsers')
const getUserByID = require ('./getUserByID')

/**************************************/

const router = Router ()

router.route (BASE)
.get (getAllUsers)

router.route (BASE + BY_ID)
.get (getUserByID)

/**************************************/

module.exports = router

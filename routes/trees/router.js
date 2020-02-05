/***********************************************************
  ~/trees - router
***********************************************************/

const BASE = '/trees'
const BY_ID = '/:tree_id'

const { Router } = require ('./__needs')
const getAllTrees = require ('./getAllTrees')
const pushTree = require ('./pushTree')
const getTreeByID = require ('./getTreeByID')

/**************************************/

const router = Router ()

router.route (BASE)
.get (getAllTrees)
.post (pushTree)

router.route (BASE + BY_ID)
.get (getTreeByID)

/**************************************/

module.exports = router

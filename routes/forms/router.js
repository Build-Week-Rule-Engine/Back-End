/***********************************************************
  ~/forms - router
***********************************************************/

const BASE = '/forms'
const BY_ID = '/:form_id'

const { Router } = require ('./__needs')
const getAllForms = require ('./getAllForms')
const getFormByID = require ('./getFormByID')

/**************************************/

const router = Router ()

router.route (BASE)
.get (getAllForms)

router.route (BASE + BY_ID)
.get (getFormByID)

/**************************************/

module.exports = router

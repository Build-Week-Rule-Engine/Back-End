/***********************************************************
  ~/forms - router
***********************************************************/

const BASE = '/forms'
const BY_ID = '/:form_id'

const { Router } = require ('./__needs')
const getAllForms = require ('./getAllForms')
const pushForm = require ('./pushForm')
const getFormByID = require ('./getFormByID')
const setFormByID = require ('./setFormByID')

/**************************************/

const router = Router ()

router.route (BASE)
.get (getAllForms)
.post (pushForm)

router.route (BASE + BY_ID)
.get (getFormByID)
.put (setFormByID)
// .delete (pullFormByID)

/**************************************/

module.exports = router

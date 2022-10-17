const express = require('express')

const { getOneCllg, getAllCllg } = require('../controllers/cllg-controller.js')

const { getAllExpByCllgName, getExpByCllgName, getAllExp } = require('../controllers/campexp-controller.js')

const { eventStuReg } = require('../controllers/eventsReg-controller.js')

const { getOnePg, getAllPg } = require('../controllers/pg-controller.js')
const { contactPgList } = require('../controllers/contactPg-controller.js')

const router = express.Router();

// routes for college finder
router.get('/collegefinder', getAllCllg);
router.get('/collegeSpecific/:id', getOneCllg);

// routes for campus explorer
// router.get('/campusexplorer', getAllExp)
router.get('/campusexplorer', getAllExpByCllgName)
router.get('/campusexplorerspecific/:collegeName', getExpByCllgName)
router.get('/Cafesnearcollege/:id', getAllExp)

// routes for events    
router.get('/event/eventStuReg', eventStuReg)

// routes for accommodation
router.get('/accomodationnearme/:id', getOnePg)
router.get('/accommodation', getAllPg)

// routes for contact
router.post('/contactPg', contactPgList);


module.exports = router
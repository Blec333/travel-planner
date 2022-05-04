const router = require('express').Router();
const locationRoutes = require('./location');
const travellerRoutes = require('./traveller');
const tripsRoutes = require('./trips');

router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;

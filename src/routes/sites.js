const express = require('express');
const router  = express.Router();
const sitesControllers = require('../app/controllers/query/SitesQuery');
const authenticateToken = require('../app/middleware/authenticateTokenAdmin');


router.use('/goivacxin', sitesControllers.HomeVacxin);
router.use('/banggia', sitesControllers.PriceList);
router.use('/gioithieu', sitesControllers.Overview);
router.use('/vacxin/chitiet/:slug', sitesControllers.DetailsVacxin);
router.use('/tintuc/chitiet/:slug', sitesControllers.DetailsTinTuc);
router.use('/tintuc', sitesControllers.HomeTinTuc);
router.use('/home', authenticateToken, sitesControllers.Index);
router.use('/', sitesControllers.Home);
router.use('/login', sitesControllers.Home);

module.exports = router;
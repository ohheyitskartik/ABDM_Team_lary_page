
const express = require('express');

const abhaRoute = require('./abha.route')


const router = express.Router();

router.use('/', abhaRoute);


module.exports = router;



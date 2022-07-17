const express = require('express');
const abhaContoller = require('../controllers/abhaController')

const router = express.Router();


router.post('/address/generateOTP', abhaContoller.generateOTP)

router.post('/address/validateOTP', abhaContoller.validateAddressOtp)

router.post('/address/registrationDetails', abhaContoller.addressRegistrationDetails)

router.post('/address/createPhrAddress', abhaContoller.addressCreatePhr)

module.exports = router;
const _ = require('lodash')
const abhaServices = require('../services/abhaServices')
const errorDecorator = require('../middleware/validation');


const generateOTP = errorDecorator(async (req, res) => {
    const retValue = await abhaServices.generateAddressOtp(
        req.body.mobile
    );
    retValue.data = JSON.parse(retValue.data);
    res.send(retValue);
});

const validateAddressOtp = errorDecorator(async (req, res) => {
    const retValue = await abhaServices.validateAddressOtp(
        req.body
    );
    retValue.data = JSON.parse(retValue.data);
    res.send(retValue);
});

const addressRegistrationDetails = errorDecorator(async (req, res) => {
    let obj = req.body;
    const retValue = await abhaServices.addressRegistrationDetails(obj);
    retValue.data = JSON.parse(retValue.data);
    res.send(retValue);
});

const addressCreatePhr = errorDecorator(async (req, res) => {

    const retValue = await abhaServices.addressCreatePhr(
        req.body.phrAddress,
        req.body.sessionId,
        req.body.alreadyExistedPHR,
    );
    const token = JSON.parse(retValue.data).token;

    let imageData = await abhaServices.fetchCard(token, req.body.phrAddress);
    retValue.imageData = imageData;
    retValue.data = JSON.parse(retValue.data);
    let getProfile = await abhaServices.getProfile(token)
    retValue.profile = JSON.parse(getProfile.data);
    res.send(retValue);
});

module.exports = {
    generateOTP,
    validateAddressOtp,
    addressRegistrationDetails,
    addressCreatePhr,
}
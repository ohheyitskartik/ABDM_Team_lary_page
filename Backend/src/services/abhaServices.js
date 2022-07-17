require('dotenv').config();
const abhaUtils = require('../utils/abhautils')
const axios = require('axios');
const _ = require('lodash');
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs');
const AWS = require('aws-sdk')
const base64ToImage = require('base64-to-image')
const mapping = require('../utils/mapping')
const { v4: uuidv4 } = require('uuid');
const boom = require('@hapi/boom');

const generateAddressOtp = async (mobile) => {
    let value = await abhaUtils.encryptRSA(mobile);
    let reqBody = {
        value: value,
        authMode: 'MOBILE_OTP',
    };
    const params = {
        method: 'post',
        url: `${process.env.NDHM_PHR_URL}/v1/apps/generate/otp`,
        data: reqBody,
    };
    let result = await abhaUtils.axiosRequest(params);
    return result;
};

const validateAddressOtp = async ({ otp, sessionId }) => {
    let value = await abhaUtils.encryptRSA(otp);
    const params = {
        method: 'post',
        url: `${process.env.NDHM_PHR_URL}/v1/apps/validate/otp`,
        data: {
            value: value,
            sessionId: sessionId,
        },
    };
    const result = await abhaUtils.axiosRequest(params);
    return result;
};

const addressRegistrationDetails = async (obj) => {
    let data = {}
    obj.mobile = await abhaUtils.encryptRSA(obj.mobile);
    if (!obj.alreadyExistedPHR) {
        if (obj.email) obj.email = await abhaUtils.encryptRSA(obj.email);
        let stateName = obj.stateName.toUpperCase();
        let cityName = obj.cityName.toUpperCase();
        let stateCode, districtCode;
        mapping.map((state) => {
            if (state.name === stateName) {
                stateCode = state.code;
                state.districts.map((city) => {
                    if (cityName === city.name) districtCode = city.code;
                });
            }
        });

        obj.stateCode = Number(stateCode);
        obj.districtCode = districtCode;
        let addressRegistrationConfig = {
            method: 'post',
            url: `${process.env.NDHM_PHR_URL}/v1/apps/registration/details`,
            data: _.omit(obj, [
                'alreadyExistedPHR',
                'phrAddress',
                'stateName',
                'cityName',
            ]),
        };
        let result = await abhaUtils.axiosRequest(addressRegistrationConfig);
        return result;
    }
    return [];
};

const addressCreatePhr = async (
    phrAddress,
    sessionId,
    alreadyExistedPHR,
) => {
    const reqBody = {
        alreadyExistedPHR: alreadyExistedPHR,
        sessionId: sessionId,
        phrAddress: phrAddress,
    };

    const params = {
        method: 'post',
        url: `${process.env.NDHM_PHR_URL}/v1/apps/create/phrAddress`,
        data: reqBody,
    };

    const response = await abhaUtils.axiosRequest(params)
    return response;
};

const s3 = new AWS.S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
})


const fetchCard = async (token, abha) => {
    try {
        const params = {
            method: 'get',
            url: `${process.env.NDHM_PHR_URL}/v1/apps/patients/profile/qr-code`,
            headers: {
                'X-Auth-Token': token,
            },
            responseType: 'arraybuffer',
        };
        const response = await abhaUtils.axiosRequest(params);
        // let base64ImageString = Buffer.from(response.data, 'binary').toString('base64')

        // const filedata = base64ImageString;
        // let matches = filedata.match(/^(.+)$/);
        // let filebuffer = new Buffer.from(matches[0], 'base64');
        // filebuffer = filebuffer.toString('base64')

        // const uploadedImage = await s3.upload({
        //     Bucket: process.env.AWSBucketName,
        //     Key: "abha",
        //     Body: filebuffer,
        //     ContentEncoding: "base64",
        //     ContentType: "Image/png"
        // }).promise()

        // console.log(uploadedImage.Location)


        // let store = { 'fileName': `${abha}`, 'type': 'png' }
        // let imageData = base64ToImage(response, '../utils/images', store)

        // S3Client.upload({ Body: data })
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err))
        return response.data;
    } catch (error) {
        if (error?.response?.data?.error?.code === 1401) {
            logger.error((`ERROR WHILE CALLING NDHM API : ${error?.response?.data?.error?.message}`));
            throw boom.unauthorized(`${error?.response?.data?.error?.message}`);
        }
        throw boom.badRequest(error.message)
    }
}

const getProfile = async (token) => {
    const params = {
        method: 'get',
        url: `${process.env.NDHM_PHR_URL}/patients/me`,
        headers: {
            'X-Auth-Token': token,
        },
    };

    let result = await abhaUtils.axiosRequest(params)
    return result;
}

module.exports = {
    generateAddressOtp,
    validateAddressOtp,
    addressRegistrationDetails,
    addressCreatePhr,
    fetchCard,
    getProfile

}
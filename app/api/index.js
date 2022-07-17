import axios from 'axios';
import { Buffer } from 'buffer';
import { abdmApis } from './apis';

export const generateOtp = (mobileNumber) =>
    axios({
        method: 'post',
        url: abdmApis.generateOtp,
        data: {
            mobile: mobileNumber,
        },
    });
export const validateOtp = (otp, sessionId) =>
    axios({
        method: 'post',
        url: abdmApis.validateOtp,
        data: {
            otp,
            sessionId,
        },
    });
export const createPhrAddress = (selectedAddress, sessionId) =>
    axios({
        method: 'post',
        url: abdmApis.createPhrAddress,
        data: {
            alreadyExistedPHR: true,
            phrAddress: selectedAddress,
            sessionId,
        },
    });
export const fetchAbhaCard = (token) =>
    axios({
        method: 'get',
        url: abdmApis.getPngCard,
        headers: {
            'X-Auth-Token': token,
        },
    }).then((res) => {
        const encoded = Buffer.from(res.data, 'binary').toString('base64');
        return encoded;
    });
export const createAbhaAddress = (formData) =>
    axios({
        method: 'post',
        url: abdmApis.createAddress,
        data: {
            ...formData,
        },
    });

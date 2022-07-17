require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto')
const boom = require('@hapi/boom');

const encryptRSA = async (mobile) => {
    const encryptedData = crypto.publicEncrypt(
        {
            key: process.env.NDHM_ENCYPTION_KEY.replace(/\|\|m\|\|/g, "\n"),
            padding: crypto.constants.RSA_PKCS1_PADDING
        },
        // We convert the data string to a buffer using `Buffer.from`
        Buffer.from(mobile)
    );
    return encryptedData.toString("base64")
}


const axiosRequest = async (config) => {
    const result = axios(config)
        .then((response) => {
            return {
                success: true,
                data: JSON.stringify(response.data),
            };
        })
        .catch((error) => {
            if (error?.response?.data?.error?.code === 1401) throw boom.unauthorized(`${error?.response?.data?.error?.message}`);
            throw boom.badRequest(`${error?.response?.data?.error?.message}`);
        });

    return result;
}

module.exports = {
    encryptRSA,
    axiosRequest
}
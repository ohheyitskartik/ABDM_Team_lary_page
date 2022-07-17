const baseUri = 'https://ndhm-larrypage.herokuapp.com/abha/address';

export const abdmApis = {
    generateOtp: `${baseUri}/generateOTP`,
    validateOtp: `${baseUri}/validateOTP`,
    createPhrAddress: `${baseUri}/createPhrAddress`,
    getPngCard: 'https://dev.ndhm.gov.in/cm/v1/apps/patients/profile/qr-code',
    createAddress: `${baseUri}/registrationDetails`,
};

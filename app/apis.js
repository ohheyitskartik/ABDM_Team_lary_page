const baseUri = 'https://dev.ndhm.gov.in';

export const abdmApis = {
    refreshSession: `${baseUri}/gateway/v0.5/sessions/`,
    generateOtp: `${baseUri}/cm/v1/apps/generate/otp`,
};

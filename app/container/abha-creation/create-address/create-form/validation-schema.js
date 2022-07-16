import * as Yup from 'yup';

export const healthIdFormSchema = Yup.object().shape({
    imageBase64: Yup.string(),
    healthId: Yup.string(),
    firstName: Yup.string()
        .required('First name is required')
        .min(1, 'Min of 1 characters required')
        .matches(/^[^\s][a-zA-Z ]{0,128}$/, 'Enter valid first name.'),
    middleName: Yup.string().matches(/^[^\s][a-zA-Z ]{0,128}$/, {
        message: 'Enter valid middle name.',
        excludeEmptyString: true,
    }),
    pin: Yup.string().required('Pin Code is required'),
    lastName: Yup.string().matches(/^[^\s][a-zA-Z ]{0,128}$/, {
        message: 'Enter valid last name.',
        excludeEmptyString: true,
    }),
    dateOfBirth: Yup.object().required('field is required'),
    gender: Yup.string().required('Gender is required'),
});

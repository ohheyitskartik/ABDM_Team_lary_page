import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { healthIdFormSchema } from './validation-schema';
import { createAbhaAddress } from '../../../../api';
import { useAbhaselector } from '../../abha-address-selector/hooks';

export const useCreateId = () => {
    const navigation = useNavigation();
    const [glob, setGlob] = useState(undefined);
    const [healthIdText, setHealthIdText] = useState(undefined);
    const { createPhrAddressMutation } = useAbhaselector();

    const { params: { sessionId = '', mobileNumber = '' } = {} } = useRoute();
    const [isHealthIdModalVisible, setIsHealthIdModalVisible] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors: formErrors, isValid: isFormValid },
    } = useForm({
        resolver: yupResolver(healthIdFormSchema),
        reValidateMode: 'onChange',
        mode: 'onChange',
        defaultValues: {
            imageBase64: '',
            healthId: '',
            firstName: '',
            lastName: '',
            dateOfBirth: {
                year: moment().year().toString(),
            },
            gender: 'M',
            pin: '',
        },
    });

    const onCreateHealthIdFormSubmit = async (formData) => {
        setGlob(formData);
        createHealthId({
            ...formData,
            name: {
                first: formData?.firstName,
                last: formData?.lastName,
            },
            phrAddress: `${formData.healthId}@sbx`,
            sessionId,
            mobile: mobileNumber,
            stateName: 'Maharashtra',
            address: 'PUNE MH',
            countryCode: '+91',
            cityName: 'Pune',
            stateCode: '7',
            districtCode: '77',
            pinCode: String(formData.pin),
            alreadyExistedPHR: false,
        });
    };

    const {
        mutateAsync: createHealthId,
        isLoading: isCreateHealthIdLoading,
        error: healthIdCreateErrorResponse,
    } = useMutation((values) => createAbhaAddress(values), {
        onSuccess: (response) => {
            const { data: { sessionId: session = '' } = {} } = response.data;
            createPhrAddressMutation(glob.healthId, session);
            navigation.navigate('Home');
        },
    });

    const handleErrorModalClose = () => {
        setIsHealthIdModalVisible(false);
    };

    return {
        control,
        isFormValid,
        formErrors,
        isHealthIdModalVisible,
        healthIdText,
        setHealthIdText,
        handleSubmit,
        onCreateHealthIdFormSubmit,
        handleErrorModalClose,
        isCreateHealthIdLoading,
        healthIdCreateErrorResponse,
    };
};

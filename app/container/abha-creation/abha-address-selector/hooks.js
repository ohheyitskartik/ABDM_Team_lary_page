import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

export const useAbhaselector = () => {
    const [selected, setSelected] = useState(null);

    const route = useRoute();

    const { mobileNumber = '', token = '', mappedPhrAddress = ['nis124@sbx'] } = route.params;

    // const settingAsync = async (healthId, tokenForHealthId) => {
    //     try {
    //         await SecureStorage.setItem(asyncStorageConstants.HEALTH_ADDRESS, healthId);
    //         await SecureStorage.setItem(asyncStorageConstants.ABHA_TOKEN, tokenForHealthId);
    //     } catch (err) {
    //         logger.log('error details', err);
    //     }
    // };

    const onPress = () => {
        console.log('onpress ScreeName: Selector');
    };

    return {
        mappedPhrAddress,
        mobileNumber,
        token,
        selected,
        onPress,
        setSelected,
    };
};

import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { RNS3 } from 'react-native-aws3';
import { Buffer } from 'buffer';
import auth from '@react-native-firebase/auth';
import { createPhrAddress, fetchAbhaCard } from '../../../api/index';
import { envVars } from '../../../../env-config';

export const useAbhaselector = () => {
    const [selected, setSelected] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    const { mobileNumber = '', mappedPhrAddress = [], sessionId } = route.params;

    // const settingAsync = async (healthId, tokenForHealthId) => {
    //     try {
    //         await SecureStorage.setItem(asyncStorageConstants.HEALTH_ADDRESS, healthId);
    //         await SecureStorage.setItem(asyncStorageConstants.ABHA_TOKEN, tokenForHealthId);
    //     } catch (err) {
    //         logger.log('error details', err);
    //     }
    // };

    const options = {
        keyPrefix: 'uploads/',
        bucket: envVars.bucketName,
        region: envVars.region,
        accessKey: envVars.awsAccessKey,
        secretKey: envVars.awsSecretKey,
        successActionStatus: 201,
    };

    const { mutate: createPhrAddressMutation } = useMutation(
        'create-phr-address',
        () => createPhrAddress(selected, sessionId),
        {
            onSuccess: (data) => {
                const {
                    data: {
                        data: { token = '' } = {},
                        profile: {
                            id = '',
                            name = {},
                            dateOfBirth = {},
                            verifiedIdentifiers = [],
                        } = {},
                        profilePhoto = '',
                    } = {},
                } = data;
                navigation.navigate('My ABHA', {
                    healthId: id,
                    name,
                    dateOfBirth,
                    verifiedIdentifiers,
                    token,
                });
                // getPngMutate(token);
            },
        },
    );

    const { mutate: getPngMutate } = useMutation(
        'get-png-card',
        (bearerToken) => fetchAbhaCard(bearerToken),
        {
            onSuccess: (data) => {
                console.log(data, 'encoded');
                const file = {
                    uri: `data:image/png;base64,${data}`,
                    name: `${auth().currentUser.phoneNumber}.${selected}.png`,
                    type: 'image/png',
                };
                RNS3.put(file, options).then((response) => {
                    if (response.status !== 201) throw new Error('Failed to upload image to S3');
                    const { postResponse: { location: imageUrl = '' } = {} } = response.body;
                    navigation.navigate('My ABHA', {
                        image: imageUrl,
                        healthId: selected,
                    });
                });
            },
        },
    );

    const onPress = () => {
        console.log('onpress ScreeName: Selector');
        createPhrAddressMutation();
        // navigation.navigate('My ABHA');
    };

    return {
        mappedPhrAddress,
        mobileNumber,
        selected,
        onPress,
        setSelected,
        createPhrAddressMutation,
    };
};

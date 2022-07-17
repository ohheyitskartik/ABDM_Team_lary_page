import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { RNS3 } from 'react-native-aws3';
import { Buffer } from 'buffer';
import auth from '@react-native-firebase/auth';
import { createPhrAddress } from '../../../api/index';
import { envVars } from '../../../../env.config';

export const useAbhaselector = () => {
    const [selected, setSelected] = useState(null);

    const navigation = useNavigation();
    const [isUploading, setIsUploading] = useState(false);

    const { params: { mobileNumber = '', mappedPhrAddress = [], sessionId } = {} } = useRoute();

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

    const { mutate: createPhrAddressMutation, isLoading: isLoadingPhr } = useMutation(
        'create-phr-address',
        (selectedAdd, session) => createPhrAddress(selected || selectedAdd, sessionId || session),
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
                        imageData,
                    } = {},
                } = data;
                setIsUploading(true);
                const encoded = Buffer.from(JSON.parse(imageData).data, 'binary').toString(
                    'base64',
                );
                const file = {
                    uri: `data:image/png;base64,${encoded}`,
                    name: `${auth().currentUser.phoneNumber}.${selected}.png`,
                    type: 'image/png',
                };
                RNS3.put(file, options).then((response) => {
                    if (response.status !== 201) throw new Error('Failed to upload image to S3');
                    const { postResponse: { location: imageUrl = '' } = {} } = response.body;
                    setIsUploading(false);
                    navigation.navigate('My ABHA', {
                        healthId: id,
                        name,
                        dateOfBirth,
                        verifiedIdentifiers,
                        token,
                        imageUrl,
                    });
                });
            },
        },
    );

    const onPress = () => {
        createPhrAddressMutation();
    };

    return {
        mappedPhrAddress,
        mobileNumber,
        selected,
        onPress,
        setSelected,
        createPhrAddressMutation,
        isLoading: isLoadingPhr || isUploading,
    };
};

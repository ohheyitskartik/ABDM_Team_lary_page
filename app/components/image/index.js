import { View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { width } from '../../../utils';

const CustomImage = ({ url }) => {
    return (
        <View style={{ width, height: 530, alignItems: 'center', justifyContent: 'center' }}>
            <FastImage
                source={{
                    uri: url,
                }}
                style={{
                    height: 530,
                    width: 360,
                    marginLeft: -30,
                    borderRadius: 25,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
        </View>
    );
};

export default CustomImage;

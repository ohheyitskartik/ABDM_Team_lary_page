import { View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { width } from '../../../utils';

const CustomImage = ({ url }) => {
    return (
        <View style={{ width: width - 20, height: 180 }}>
            <FastImage
                source={{
                    uri: url,
                }}
                style={{
                    width: width - 20,
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 12,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
        </View>
    );
};

export default CustomImage;

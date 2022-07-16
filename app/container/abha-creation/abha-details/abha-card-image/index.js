import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import Overlay from 'react-native-modal-overlay';
import styles from './styles';
import { images } from './images';
import { scale } from '../../../../../utils';

export default function AbhaCardImage() {
    const [showCard, setShowCard] = useState(false);
    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
                        <FastImage
                            source={images.NHAlogo}
                            style={{
                                width: scale(50),
                                height: scale(50),
                                position: 'absolute',
                                left: 15,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text>Health ID</Text>
                    </View>
                    <View style={{ padding: 10, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Nishanth Bhat</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.text]}>PHR Address : </Text>
                            <Text style={styles.text}>nis124@sbx</Text>
                        </View>
                    </View>
                    <FastImage
                        source={{
                            uri: 'https://preview.redd.it/ofr9odcc60k81.png?width=640&crop=smart&auto=webp&s=d83b9237170c302b3d4315fec6d8cb1af1462c9b',
                        }}
                        style={{
                            // width: '80%',
                            // height: '80%',
                            width: scale(220),
                            height: scale(220),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            </View>
        </>
    );
}

import { View, Text } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { images } from './images';
import { scale } from '../../../../../utils';

export default function AbhaCardImage({ healthId, image, name, dateOfBirth, verifiedIdentifiers }) {
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
                            <Text style={styles.text}>{`${name.first} ${name.last}`}t</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.text]}>PHR Address : </Text>
                            <Text style={styles.text}>{healthId}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.text]}>Mobile Number : </Text>
                            <Text style={styles.text}>{verifiedIdentifiers[0].value}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

import { View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import CharacterAnimation from '../../../assets/animations/character.json';
import Text from '../text';

const WelcomeCard = ({ name }) => {
    return (
        <View style={{ flexDirection: 'row', padding: 10, paddingTop: 0, alignItems: 'center' }}>
            <View
                style={{
                    marginRight: 15,
                    borderColor: '#B2EA1D',
                    borderWidth: 3,
                    borderRadius: 100,
                }}>
                <Lottie
                    source={CharacterAnimation}
                    style={{
                        height: 60,
                        width: 60,
                    }}
                    autoPlay
                    loop
                />
            </View>

            <View
                style={{
                    alignItems: 'flex-start',
                }}>
                <Text fontType="bold" style={{ marginBottom: 3 }}>
                    Hello, {name}
                </Text>
                <Text color="#878787">Let's check your stats</Text>
            </View>
        </View>
    );
};

export default WelcomeCard;

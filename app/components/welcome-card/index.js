import { Modal, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import CharacterAnimation from '../../../assets/animations/character.json';
import DownloadAnimation from '../../../assets/animations/download.json';
import Text from '../text';
import CustomIcon from '../icon';

const WelcomeCard = ({ name }) => {
    const [openModal, setOpenModal] = useState(false);

    const onAnimationFinish = () => {};
    return (
        <View
            style={{
                flexDirection: 'row',
                padding: 10,
                paddingTop: 0,
                alignItems: 'center',
                width: '100%',
            }}>
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
                    Hello, User
                </Text>
                <Text color="#878787">Let's check your stats</Text>
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
                <TouchableOpacity onPress={() => setOpenModal(true)}>
                    <CustomIcon
                        variant="ionicons"
                        name="download"
                        size={20}
                        color="black"
                        solid
                        style={{ padding: 15 }}
                    />
                </TouchableOpacity>
            </View>
            <Modal visible={openModal}>
                <View style={{ position: 'absolute', top: 40, right: 5, zIndex: 2 }}>
                    <TouchableOpacity onPress={() => setOpenModal(false)}>
                        <CustomIcon
                            variant="ionicons"
                            name="close"
                            size={30}
                            color="black"
                            solid
                            style={{ padding: 18 }}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flex: 1,
                        padding: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Lottie
                        source={DownloadAnimation}
                        style={{
                            height: 200,
                            width: 200,
                        }}
                        onAnimationFinish={onAnimationFinish}
                        autoPlay
                        loop={false}
                    />
                    <Text style={{ textAlign: 'center' }}>
                        {'Processing your Health Data,\nthis might take a minute'}
                    </Text>
                </View>
            </Modal>
        </View>
    );
};

export default WelcomeCard;

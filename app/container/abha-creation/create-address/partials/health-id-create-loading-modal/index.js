import { View } from 'react-native';
import React from 'react';
import { Modal, Text } from 'app/components';
import FastImage from 'react-native-fast-image';
import Lottie from 'lottie-react-native';
import images from '../../../images';
import styles from './styles';
import HealthIdErrorModal from '../error-popup';

interface IHealthIdCreateLoadingModalProps {
    isVisible: boolean;
    handleClose?: () => void;
    handleTryAgain?: () => void;
    errorMessage?: string;
    isHealthIdError: boolean;
    displayText?: string;
}
const HealthIdCreateLoadingModal = ({
    isVisible,
    handleClose = () => {},
    handleTryAgain = () => {},
    errorMessage = 'Looks like something went wrong! Please try again.',
    isHealthIdError,
    displayText = 'Generating ABHAID',
}: IHealthIdCreateLoadingModalProps): JSX.Element => {
    return (
        <View>
            <Modal visible={isVisible}>
                {isHealthIdError ? (
                    <HealthIdErrorModal
                        errorMessage={errorMessage}
                        handleClose={handleClose}
                        handleTryAgain={handleTryAgain}
                    />
                ) : (
                    <View style={styles.modalView}>
                        <FastImage
                            source={images.scanner}
                            style={styles.imageIconStyle}
                            resizeMode="contain"
                        />
                        <Lottie
                            source={images.scannerAnimation}
                            autoPlay
                            loop
                            style={styles.lottieStyle}
                        />

                        <Text fontType="bold" style={styles.text}>
                            {displayText}
                        </Text>
                    </View>
                )}
            </Modal>
        </View>
    );
};
export default HealthIdCreateLoadingModal;

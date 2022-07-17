import { View } from 'react-native';
import React from 'react';
import { Bar } from 'react-native-progress';
import { scale, verticalScale, width } from '../../../utils';
import ProgressCap from '../progress-cap';
import CustomIcon from '../icon';
import styles from './styles';
import { white } from '../../../colors';
import Text from '../text';

const OverViewCard = () => {
    return (
        <View style={{ marginTop: verticalScale(10) }}>
            <Text fontType="bold">Today's Overview</Text>
            <View
                style={{
                    padding: scale(20),
                    paddingVertical: scale(14),
                    borderRadius: 20,
                    marginTop: verticalScale(10),
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                }}>
                <View style={styles.barContainer}>
                    <CustomIcon
                        variant="fontawesome5"
                        name="walking"
                        size={20}
                        color="black"
                        solid
                        style={{ marginRight: 18 }}
                    />
                    <ProgressCap progress={[1, 1, 1]} width={width - 60} />
                </View>

                <View style={styles.barContainer}>
                    <CustomIcon
                        variant="fontawesome5"
                        name="envira"
                        size={20}
                        color="black"
                        solid
                        style={{ marginRight: 15 }}
                    />
                    <ProgressCap progress={[1, 1, 0]} width={width - 60} />
                </View>
                <View style={styles.barContainer}>
                    <CustomIcon
                        variant="material"
                        name="location-history"
                        size={20}
                        color="black"
                        solid
                        style={{ marginRight: 15 }}
                    />
                    <ProgressCap progress={[1, 0, 0]} width={width - 60} />
                </View>
            </View>
        </View>
    );
};

export default OverViewCard;

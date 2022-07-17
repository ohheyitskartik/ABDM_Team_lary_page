import { View } from 'react-native';
import React from 'react';
import { scale, verticalScale } from '../../../utils';
import Text from '../text';
import CustomIcon from '../icon';

const LifeStyleCard = ({
    calories = '--',
    totalDistance = '--',
    hrv = '--',
    polen = '--',
    airQuality = '--',
}) => {
    return (
        <View
            style={{
                marginVertical: verticalScale(5),
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: scale(20),
                paddingHorizontal: scale(30),
            }}>
            <View>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View>
                        <CustomIcon
                            variant="SimpleLineIcons"
                            name="fire"
                            size={25}
                            color="black"
                            solid
                            style={{ marginRight: 18 }}
                        />
                    </View>
                    <View>
                        <Text color="#747373">Total Burned</Text>
                        <Text fontType="bold" size={16}>
                            {calories} kcal
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingTop: verticalScale(20),
                    }}>
                    <View>
                        <CustomIcon
                            variant="SimpleLineIcons"
                            name="heart"
                            size={25}
                            color="black"
                            solid
                            style={{ marginRight: 18 }}
                        />
                    </View>
                    <View>
                        <Text color="#747373">HRv</Text>
                        <Text fontType="bold">{hrv} ms</Text>
                    </View>
                </View>
            </View>
            <View style={{ borderWidth: 0.2, backgroundColor: '#bababa' }} />
            <View>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <View>
                        <CustomIcon
                            variant="entypo"
                            name="air"
                            size={25}
                            color="black"
                            solid
                            style={{ marginRight: 18 }}
                        />
                    </View>
                    <View>
                        <Text color="#747373">Air Quality</Text>
                        <Text fontType="bold">{airQuality}</Text>
                    </View>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingTop: verticalScale(20),
                    }}>
                    <View>
                        <CustomIcon
                            variant="materialcommunity"
                            name="flower"
                            size={25}
                            color="black"
                            solid
                            style={{ marginRight: 18 }}
                        />
                    </View>
                    <View>
                        <Text color="#747373">Pollen Risk</Text>
                        <Text fontType="bold">{polen}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LifeStyleCard;

import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { ScrollView } from 'react-native-gesture-handler';
import _ from 'lodash';
import PropTypes from 'prop-types';
import CustomIcon from '../../components/icon';

const MenuS = ({ s, setS, list, text }) => {
    return (
        <>
            <ScrollView horizontal style={{ flexDirection: 'row', paddingVertical: 10 }}>
                {s.map((a, idx) => (
                    <View
                        key={idx}
                        style={{
                            padding: 10,
                            marginRight: 10,
                            backgroundColor: '#ddd',
                            borderRadius: 8,
                            flexDirection: 'row',
                        }}>
                        <Text style={{ paddingRight: 10 }}>{a}</Text>
                        <CustomIcon
                            variant="AntDesign"
                            name="close"
                            color="green"
                            onPress={() => {
                                const filtered = s.filter((item) => item !== a);
                                setS(filtered);
                            }}
                        />
                    </View>
                ))}
            </ScrollView>
            <Menu>
                <MenuTrigger
                    customStyles={{
                        TriggerTouchableComponent: TouchableWithoutFeedback,
                    }}>
                    <View
                        style={{
                            width: '100%',

                            marginTop: 10,
                            borderRadius: 8,
                        }}>
                        <Text>{`Add ${text}`}</Text>
                    </View>
                </MenuTrigger>
                <MenuOptions
                    optionsContainerStyle={{
                        width: '90%',
                        backgroundColor: '#eee',
                        borderRadius: 8,
                        shadowOpacity: 0,
                    }}>
                    {list.map((allergy) => (
                        <MenuOption
                            key={allergy.key}
                            onSelect={() =>
                                setS((old) => {
                                    const n = [...old, allergy.name];
                                    return _.uniq(n);
                                })
                            }>
                            <Text style={{ width: '100%', padding: 5 }}>{allergy.name}</Text>
                        </MenuOption>
                    ))}
                </MenuOptions>
            </Menu>
        </>
    );
};

export default MenuS;

MenuS.defaultProps = {
    s: [],
    list: [],
    setS: undefined,
    text: '',
};

MenuS.propTypes = {
    s: PropTypes.array,
    setS: PropTypes.func,
    list: PropTypes.array,
    text: PropTypes.string,
};

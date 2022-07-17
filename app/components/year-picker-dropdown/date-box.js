import React from 'react';
import { View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Menu, MenuTrigger, MenuOptions, MenuOption, renderers } from 'react-native-popup-menu';
import Text from '../text';
import Icon from '../icon';
import Card from '../card';
import styles, { baseWidth } from './styles';
import { scale, verticalScale } from '../../../utils';
import { lightBlueShade, white, colorCongratsRelation, blackMatte } from '../../../colors';

const { computePosition } = renderers.ContextMenu;

const CustomMenu = (props) => {
    const { children, layouts, ...other } = props;
    const position = computePosition(layouts);
    position.left += scale(baseWidth * 0);
    position.top += props.height + 7;
    return (
        <Card variant="shadow" {...other} style={[position, styles.menuStyle]}>
            <ScrollView persistentScrollbar>{children}</ScrollView>
        </Card>
    );
};

CustomMenu.propTypes = {
    children: PropTypes.node.isRequired,
    layouts: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired,
};

const DateBox = (props) => {
    return (
        <Menu renderer={(params) => <CustomMenu {...params} height={props.height} />}>
            <MenuTrigger
                disabled={props.disabled}
                customStyles={{
                    TriggerTouchableComponent: TouchableWithoutFeedback,
                }}>
                <View
                    style={[
                        styles.box,
                        {
                            paddingVertical: verticalScale(9),
                            backgroundColor: props.value ? lightBlueShade : white,
                        },
                        props.fieldErrorStyle,
                    ]}>
                    <View style={styles.boxLabel}>
                        <Text fontType="normal" color={colorCongratsRelation}>
                            {props.value || props.label}
                        </Text>
                    </View>
                    <Icon
                        variant="material"
                        size={20}
                        color={colorCongratsRelation}
                        name="expand-more"
                    />
                </View>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.innerBox}>
                {props?.options?.map((option) => (
                    <MenuOption
                        key={option}
                        onSelect={() => props.onChange(option)}
                        style={styles.option}>
                        <Text fontType="normal" color={blackMatte}>
                            {option}
                        </Text>
                    </MenuOption>
                ))}
            </MenuOptions>
        </Menu>
    );
};

export default DateBox;

DateBox.defaultProps = {
    value: null,
    disabled: false,
    height: scale(60),
    paddingV: scale(17),
    fieldErrorStyle: {},
};

DateBox.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    selectionColor: PropTypes.string.isRequired,
    height: PropTypes.number,
    paddingV: PropTypes.number,
    fieldErrorStyle: PropTypes.object,
};

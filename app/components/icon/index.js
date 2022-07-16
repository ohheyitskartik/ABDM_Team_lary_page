import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml, SvgUri } from 'react-native-svg';
import { ViewPropTypes } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcons from 'react-native-vector-icons/Zocial';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import FastImage from 'react-native-fast-image';
import {
    svg,
    svgXml,
    imageIcon,
    antDesign,
    entypo,
    evil,
    feather,
    fontawesome,
    fontawesome5,
    ionIcons,
    material,
    materialCommunity,
    octIcons,
    simpleLineIcons,
    zocialIcons,
    fontisto,
} from './icon-variants';
import { silverChalice } from '../../../colors';

const CustomIcon = (props) => {
    const {
        variant,
        size,
        name,
        color,
        style,
        image,
        height,
        width,
        disabled,
        testID,
        accessibilityLabel,
        ...others
    } = props;

    const otherProps = { style, disabled, testID, accessibilityLabel, ...others };

    switch (variant) {
        case svg: {
            return <SvgUri {...otherProps} width={height} height={width} uri={name} fill={color} />;
        }
        case svgXml: {
            return <SvgXml {...otherProps} height={height} width={width} xml={image} />;
        }
        case imageIcon: {
            return (
                <FastImage
                    {...otherProps}
                    source={name}
                    style={[{ width: size, height: size }, { ...style }]}
                    resizeMode="contain"
                />
            );
        }
        case antDesign: {
            return <AntDesign {...props} />;
        }
        case entypo: {
            return <Entypo {...props} />;
        }
        case evil: {
            return <EvilIcons {...props} />;
        }
        case feather: {
            return <Feather {...props} />;
        }
        case fontawesome: {
            return <FontAwesomeIcon {...props} />;
        }
        case fontawesome5: {
            return <FontAwesomeIcon5 {...props} />;
        }
        case ionIcons: {
            return <Ionicons {...props} />;
        }
        case material: {
            return <MaterialIcon {...props} />;
        }
        case materialCommunity: {
            return <MaterialCommunityIcons {...props} />;
        }
        case octIcons: {
            return <Octicons {...props} />;
        }
        case simpleLineIcons: {
            return <SimpleLineIcons {...props} />;
        }
        case zocialIcons: {
            return <ZocialIcons {...props} />;
        }
        case fontisto: {
            return <FontistoIcons {...props} />;
        }
        default: {
            return <AntDesign {...props} />;
        }
    }
};

CustomIcon.defaultProps = {
    variant: antDesign,
    size: 18,
    name: 'ellipsis1',
    color: silverChalice,
    style: {},
    image: '',
    height: '30',
    width: '30',
    disabled: false,
    testID: 'components-icon-index-100',
    accessibilityLabel: 'components-icon-index-100',
};

//  WARNING_FIXED: width coming from props is number.
CustomIcon.propTypes = {
    variant: PropTypes.oneOf([
        svg,
        svgXml,
        imageIcon,
        antDesign,
        entypo,
        evil,
        feather,
        fontawesome,
        fontawesome5,
        ionIcons,
        material,
        materialCommunity,
        octIcons,
        simpleLineIcons,
        zocialIcons,
    ]).isRequired,
    size: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    style: ViewPropTypes.style,
    image: PropTypes.any,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.number,
    disabled: PropTypes.bool,
    testID: PropTypes.any,
    accessibilityLabel: PropTypes.any,
};

export default CustomIcon;

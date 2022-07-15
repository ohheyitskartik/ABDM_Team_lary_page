import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card as NBCard, CardItem } from 'native-base';
import styles from './styles';

const CardBasic = ({ style, children }) => {
    return (
        <View
            style={[styles.CardBasic, style]}
            testID="components-card-view-0"
            accessibilityLabel="components-card-view-0">
            {children}
        </View>
    );
};

CardBasic.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
};

CardBasic.defaultProps = {
    children: null,
    style: {},
};

const CardShadow = ({ style, children }) => {
    return <NBCard style={style}>{children}</NBCard>;
};

CardShadow.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
};

CardShadow.defaultProps = {
    children: null,
    style: {},
};

const CardNativeBase = ({ borderRadius, style, children }) => {
    return (
        <NBCard style={[{ borderRadius }, style]}>
            <CardItem style={{ borderRadius }}>{children}</CardItem>
        </NBCard>
    );
};

CardNativeBase.propTypes = {
    borderRadius: PropTypes.number,
    children: PropTypes.node,
    style: PropTypes.object,
};

CardNativeBase.defaultProps = {
    borderRadius: 0,
    children: null,
    style: {},
};

const Card = props => {
    const { variant } = props;
    if (variant === 'shadow') return <CardShadow {...props} />;
    if (variant === 'nativeBase') return <CardNativeBase {...props} />;
    return <CardBasic {...props} />;
};

Card.propTypes = {
    variant: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
};

Card.defaultProps = {
    variant: 'basic',
    style: {},
};
export default Card;

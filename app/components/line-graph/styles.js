import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../utils';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: verticalScale(15),
    },
    barContainer: {
        flexDirection: 'row',
        paddingVertical: scale(5),
        alignItems: 'center',
    },
    chart: {
        borderRadius: scale(15),
        paddingTop: verticalScale(15),
    },
    chartHeading: {},
});

export default styles;
